import React from "react";
import { shallow } from "enzyme";
import FeedbackDialog from "./FeedbackDialog";

const wrap = (props = {}) => shallow(<FeedbackDialog {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "foo" });
  expect(wrapper.find({ id: "foo" })).toHaveLength(1);
});
