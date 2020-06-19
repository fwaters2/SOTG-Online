import React from "react";
import { List } from "@material-ui/core";
import CheckBoxListItem from "../../Molecules/CheckBoxListItem";
import SwipeableViews from "react-swipeable-views";

interface Example {
  stringsId: string;
  category: string;
  category_short: string;
  value: number;
  default_example: string;
}
interface Props {
  examplesTab?: number;
  setExamplesTab?: any;
  examples: Example[];
  validatedFeedback?: any;
  id?: string;
  setValidatedFeedback: any;
}

const Wrapper = (props: any) => (
  <div
    {...props}
    style={{
      background: "#0038ae",
      margin: "0 -2em",
      boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)",
    }}
  />
);

const CheckboxList = ({
  examplesTab,
  setExamplesTab,
  examples,
  validatedFeedback,
  setValidatedFeedback,
  ...props
}: Props) => {
  return (
    <Wrapper {...props}>
      <SwipeableViews
        enableMouseEvents
        animateHeight
        resistance
        index={examplesTab}
        onChangeIndex={(e: any) => setExamplesTab(e)}
      >
        {[0, 1, 2, 3, 4].map((spiritScore) => {
          const arrayForThisScore = examples.filter(
            (example) => example.value === spiritScore
          );
          return (
            <List dense key={spiritScore}>
              {arrayForThisScore.map((x: Example, index: number) => {
                const isChecked = validatedFeedback[x.stringsId];
                const toggleChecked = () =>
                  setValidatedFeedback({
                    ...validatedFeedback,
                    [x.stringsId]: !validatedFeedback[x.stringsId],
                  });
                return (
                  <CheckBoxListItem
                    key={x.stringsId}
                    example={x.default_example}
                    isLastListItem={arrayForThisScore.length === index + 1}
                    isChecked={isChecked}
                    onClick={toggleChecked}
                    index={index}
                    {...props}
                  />
                );
              })}
            </List>
          );
        })}
      </SwipeableViews>
    </Wrapper>
  );
};

export default CheckboxList;
