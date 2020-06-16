import React from "react";
import { List } from "@material-ui/core";
import CheckBoxListItem from "../../Molecules/CheckBoxListItem";

interface Props {
  examplesTab?: number;
  examples?: any;
  currentCategory?: any;
  formResponses?: any;
  id?: string;
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
  currentCategory,
  examples,
  //formResponses,
  ...props
}: Props) => {
  return (
    <Wrapper {...props}>
      {/* <SwipeableViews
        animateHeight
        resistance
        index={examplesTab}
        onChangeIndex={(e) => alert(e)}
      > */}
      {/* {[0, 1, 2, 3, 4].map((page) => ( */}
      <List dense>
        {/* {examples[page].map((x, index) => ( */}
        {examples[0].map((x, index) => (
          <CheckBoxListItem
            key={x}
            examples={`${currentCategory}Examples`}
            //formResponses={formResponses}
            setFormResponses={() => alert("trying to update")}
            example={x}
            isLastListItem={examples[0].length === index + 1}
            category={currentCategory}
            //categoryScore={page}
            index={index}
          />
        ))}
      </List>
      {/* ))} */}
      {/* </SwipeableViews> */}
    </Wrapper>
  );
};

export default CheckboxList;
