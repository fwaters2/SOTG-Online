import React from "react";
import Teams from "./Teams";
import Category from "./Category";
import Summary from "./Summary";

export default function Router({ state, data }) {
  const { step, SpiritText } = state;
  const categories = Object.keys(SpiritText).filter(x => x !== "general");

  if (step === 1) {
    return <Teams state={state} text={SpiritText} data={data} />;
  } else if (step > 1 && step < categories.length + 2) {
    return (
      <Category state={state} textGen={SpiritText} categories={categories} />
    );
  } else if (step === categories.length + 2) {
    return (
      <Summary state={state} categories={categories} summaryText={SpiritText} />
    );
  } else {
    return <div>Page Not Found</div>;
  }
}
