import React from "react";
import { shallow } from "enzyme";
import Header from ".";

const MenuLinks = [
  { text: "Home", extension: "./home", to: "/" },
  { text: "Example Page", extension: "./example-page", to: "/example-page" },
];

const wrap = (props = {}) =>
  shallow(<Header menuLinks={MenuLinks} {...props} />);

it("renders props when passed in", () => {
  const wrapper = wrap({ id: "foo" });
  expect(wrapper.find({ id: "foo" })).toHaveLength(2);
});
