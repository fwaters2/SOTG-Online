import React from "react";

interface Props {
  children?: string;
  style?: any;
}

const Atom = (props: Props) => {
  return <div {...props}>{props.children}</div>;
};

export default Atom;
