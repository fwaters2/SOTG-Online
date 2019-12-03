import React from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

export default function NavLink(props) {
  const { label, extension } = props;
  return (
    <Link
      component={React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} {...props} />
      ))}
      to={"/" + extension}
    >
      {label}
    </Link>
  );
}
