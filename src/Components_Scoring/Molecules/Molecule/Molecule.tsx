import React from "react";

interface Props {
  children?: any;
  id?: string;
}

const Wrapper = (props: any) => <div {...props} />;

const Molecule = ({ children, ...props }: Props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Molecule;
