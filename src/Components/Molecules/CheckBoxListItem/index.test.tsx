import React from "react";
import { shallow } from "enzyme";
import CheckBoxListItem from ".";

const wrap = (props = {}) =>
  shallow(<CheckBoxListItem example={"Test"} {...props} />);

it("renders example when passed in", () => {
  const wrapper = wrap({ example: "foo" });
  expect(wrapper.find({ example: "foo" })).toHaveLength(1);
});
