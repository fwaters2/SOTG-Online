import React from "react";
import { mount } from "enzyme";
import ScoringForm from ".";

//const wrap = (props = {}) => shallow(<ScoringForm {...props}></ScoringForm>);

it("mounts", () => {
  mount(<ScoringForm />);
});
