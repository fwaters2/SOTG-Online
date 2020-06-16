import React from "react";
import { Container, Box } from "@material-ui/core";

interface Props {
  header?: JSX.Element;
  hero?: JSX.Element;
  actionButtons?: JSX.Element;
  children?: any;
  footer?: JSX.Element;
}

const HomePage = (props: Props) => {
  const { header, hero, actionButtons, children, footer } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>{header}</div>
      <div style={{ display: "flex", flex: 1 }}>
        <Container maxWidth="xs">
          <Box
            minHeight="calc(75vh - 50px)"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box m="3em" mt={0}>
              {hero}
            </Box>
            <Box>{actionButtons}</Box>
            <div>{children}</div>
          </Box>
        </Container>
      </div>
      <div>{footer}</div>
    </div>
  );
};

export default HomePage;
