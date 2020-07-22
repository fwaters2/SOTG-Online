import * as React from "react";
type Action = { type: "incrementStep" } | { type: "decrementStep" } | null;
type Dispatch = (action: Action) => void;
type State = { step: number };
type FormStateProviderProps = { children: React.ReactNode };
const FormStateContext = React.createContext<State | undefined>(undefined);
const FormStateDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);
const formStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "incrementStep": {
      return { step: state.step + 1 };
    }
    case "decrementStep": {
      return { step: state.step - 1 };
    }
    default: {
      throw new Error(`Unhandled action type:`); // ${action.type}`);
    }
  }
};
const FormStateProvider = ({ children }: FormStateProviderProps) => {
  const [state, dispatch] = React.useReducer(formStateReducer, { step: 0 });
  return (
    <FormStateContext.Provider value={state}>
      <FormStateDispatchContext.Provider value={dispatch}>
        {children}
      </FormStateDispatchContext.Provider>
    </FormStateContext.Provider>
  );
};
const useFormState = () => {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error("useFormState must be used within a FormStateProvider");
  }
  return context;
};
const useFormStateDispatch = () => {
  const context = React.useContext(FormStateDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useFormStateDispatch must be used within a FormStateProvider"
    );
  }
  return context;
};
export { FormStateProvider, useFormState, useFormStateDispatch };
