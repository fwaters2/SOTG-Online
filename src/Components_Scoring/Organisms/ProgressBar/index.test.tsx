import React from "react";
import { mount } from "enzyme";
import ProgressBar from ".";

//const wrap = (props = {}) => shallow(<ProgressBar {...props} />);

// it("renders props when passed in", () => {
//   const wrapper = wrap({ id: "foo" });
//   expect(wrapper.find({ id: "foo" })).toHaveLength(1);
// });
it("mounts", () => {
  mount(<ProgressBar steps={[0, 1, 2]} activeStep={1} />);
});
