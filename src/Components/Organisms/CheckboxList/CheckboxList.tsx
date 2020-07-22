import React from "react";
import { List } from "@material-ui/core";
import CheckBoxListItem from "../../Molecules/CheckBoxListItem";
import SwipeableViews from "../../Templates/SwipeableViews";

interface Example {
  stringsId: string;
  category: string;
  category_short: string;
  value: number;
  default_example: string;
  translatedExample: string;
}
interface Props {
  examplesTab?: number;
  setExamplesTab?: any;
  examples: Example[];
  validatedFeedback?: any;
  id?: string;
  setValidatedFeedbacks: any;
}

const Wrapper = (props: any) => <div {...props} />;

const scoreArray = [0, 1, 2, 3, 4];

const CheckboxList = ({
  examplesTab,
  setExamplesTab,
  examples,
  validatedFeedback,
  setValidatedFeedbacks,
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
        {scoreArray.map((spiritScore) => {
          const arrayForThisScore = examples.filter(
            (example) => example.value === spiritScore
          );
          return (
            <List dense key={spiritScore}>
              {arrayForThisScore.map((x: Example, index: number) => (
                <CheckBoxListItem
                  key={x.stringsId}
                  primary={x.translatedExample}
                  isChecked={validatedFeedback[x.stringsId]}
                  onClick={() => setValidatedFeedbacks(x.stringsId)}
                  index={index}
                  {...props}
                />
              ))}
            </List>
          );
        })}
      </SwipeableViews>
    </Wrapper>
  );
};

export default CheckboxList;
