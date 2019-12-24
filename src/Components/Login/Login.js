import React from "react";
import StyledPaper from "../StyledPaper";
import StyledTextField from "../StyledTextField";
import { Strings as Languages } from "../../Assets/Lang/Languages";
import { Button } from "@material-ui/core";

export default function Login() {
  const [formResponses, setFormResponses] = React.useState({
    email: "",
    password: ""
  });
  const [lang, setLang] = React.useState("en");
  const currentLanguage = Languages(lang);
  return (
    <StyledPaper
      title="Organizer Login"
      setLang={setLang}
      currentLanguage={currentLanguage}
      lang={lang}
    >
      <div style={{ margin: "-2em 2em 0" }}>
        <StyledTextField
          placeholder="Username/Email"
          label="Username/Email"
          stateKey="email"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          currentLanguage={currentLanguage}
        />
        <StyledTextField
          placeholder="Password"
          label="Password"
          stateKey="password"
          formResponses={formResponses}
          setFormResponses={setFormResponses}
          currentLanguage={currentLanguage}
        />

        <Button fullWidth variant="contained" color="primary">
          Login
        </Button>
      </div>
    </StyledPaper>
  );
}
