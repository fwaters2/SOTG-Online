import React from "react";
import { mount, shallow } from "enzyme";
import Template from ".";

const wrap = (props = { header: <div />, footer: <div /> }) =>
  shallow(<Template {...props}>test</Template>);

it("mounts", () => {
  mount(
    <Template header={<div />} footer={<div />}>
      test
    </Template>
  );
});

it("renders children when passed in", () => {
  const wrapper = wrap();
  expect(wrapper.contains("test")).toBe(true);
});
it("renders header", () => {
  const wrapper = wrap();
  expect(wrapper.contains(<div />)).toBe(true);
});
