import { createContext } from "react";

// const defaultLanguage = require("../Components/languages/examples/default.json");

interface StateProps {
  currentStep: number;
  steps: string[];
  title: any;
  currentScore: number;
  setCurrentScore: any;
  examples: any;
  validatedFeedbacks: any;
  setValidatedFeedbacks: any;
  additionalFeedback: string;
  setAdditionalFeedback: any;
  handleStepChange: any;
  setStep: any;
}

interface ContextProps {
  state: StateProps;
  dispatch: any;
}

// currentStep: 0,
// steps: ["category1", "category2"],
// title: string,
// currentScore: 2,
// setCurrentScore: () => null,
// examples: defaultLanguage,
// validatedFeedbacks: {},
// setValidatedFeedbacks: () => null,
// additionalFeedback: "currentAdditionalFeedback",
// setAdditionalFeedback: () => null,
// handleStepChange: () => null,
// setStep: () => null,

const ScoringFormContext = createContext<Partial<ContextProps>>({});

export default ScoringFormContext;
