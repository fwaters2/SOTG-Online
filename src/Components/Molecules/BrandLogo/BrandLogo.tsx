import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SOTGLogo } from "../../../Assets/Logos/SOTG_Full.svg";

interface Props {
  id?: string;
}

const Wrapper = (props: any) => <div {...props} />;

const BrandLogo = ({ ...props }: Props) => {
  return (
    <Wrapper {...props}>
      <Link to="/">
        <SOTGLogo
          style={{
            height: "2.5em",
            margin: "2em 1em",
          }}
        />
      </Link>
    </Wrapper>
  );
};

export default BrandLogo;
