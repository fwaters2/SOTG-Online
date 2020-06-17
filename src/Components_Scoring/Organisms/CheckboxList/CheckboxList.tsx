import React from "react";
import { List } from "@material-ui/core";
import CheckBoxListItem from "../../Molecules/CheckBoxListItem";
import SwipeableViews from "react-swipeable-views";

interface Props {
  examplesTab?: number;
  setExamplesTab?: any;
  examples?: any;
  validatedFeedback?: any;
  id?: string;
  feedbackArray: any;
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
  feedbackArray,
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
        {[0, 1, 2, 3, 4].map((spiritScore) => (
          <List dense key={spiritScore}>
            {examples[spiritScore].map((x: string, index: number) => {
              const isChecked = feedbackArray.includes(index);
              return (
                <CheckBoxListItem
                  key={x}
                  example={x}
                  isLastListItem={examples[spiritScore].length === index + 1}
                  isChecked={isChecked}
                  index={index}
                  {...props}
                />
              );
            })}
          </List>
        ))}
      </SwipeableViews>
    </Wrapper>
  );
};

export default CheckboxList;
