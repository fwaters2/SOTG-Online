import React, { useState } from "react";
import Firebase from "../Firebase";
import NavLink from "./NavLink";

export default function AddEvent() {
  const [email, setEmail] = useState("");
  const [eventName, setEventName] = useState("");
  const [teams, setTeams] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setSlug(eventName.toLowerCase().replace(/\s/g, ""));
    Firebase.firestore()
      .collection("events")
      .add({
        email: email,
        name: eventName,
        teams: teams.split(", "),
        slug: eventName.toLowerCase().replace(/\s/g, "")
      })
      .then(docRef => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />

        <input
          placeholder="Event Name"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
        />
        <br />
        <input
          style={{ width: "500px", padding: "1em" }}
          placeholder="Teams (separate by a comma and a space e.g. Team A, Team B, etc)"
          value={teams}
          onChange={e => setTeams(e.target.value)}
        />
        <div>
          Your URL: SOTG.online/{eventName.toLowerCase().replace(/\s/g, "")}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {slug ? (
        <NavLink label="Go to your spirit form" extension={slug} />
      ) : null}
    </div>
  );
}
