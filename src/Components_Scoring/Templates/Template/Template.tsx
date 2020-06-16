import React from "react";

interface Props {
  header: JSX.Element;
  footer: JSX.Element;
  children?: any;
  id?: string;
}

const Wrapper = (props: any) => <div {...props} />;
const Header = (props: any) => <header {...props} />;

const Template = ({ header, children, ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      {children}
    </Wrapper>
  );
};

export default Template;
