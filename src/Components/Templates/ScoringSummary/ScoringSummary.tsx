import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  FormLabel,
} from "@material-ui/core";

import ThemeContext from "../../themes/default";
import FormPaper from "../../Molecules/FormPaper";

interface Props {
  id?: any;
  title?: any;
  progressBar?: any;
  subtotals?: any;
  finalThoughts?: any;
  feedbackSummary?: any;
  navigationButtons?: any;
}

const Title = (props: any) => <Typography variant="h5" {...props} />;

const ProgressBar = (props: any) => <div {...props} />;

const useStyles = makeStyles(() => ({
  formLabel: {
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    fontSize: "10pt",
    display: "inline-block",
    margin: "0 0 0.75em",
  },
}));
const StyledFormLabel = (props: any) => {
  const classes = useStyles();
  return <FormLabel className={classes.formLabel} {...props} />;
};

const Subtotals = (props: any) => {
  const { palette } = React.useContext(ThemeContext);
  return (
    <div
      {...props}
      style={{
        background: palette.surface,
        color: palette.onSurface,
        margin: "0 -2em",
      }}
    />
  );
};
const Inset = (props: any) => {
  const { palette } = React.useContext(ThemeContext);
  return (
    <div
      {...props}
      style={{
        background: palette.inset,
        margin: "0 -2em",
        boxShadow: "inset 5px 5px 5px rgba(0,0,0,0.2)",
      }}
    />
  );
};

const FinalThoughts = (props: any) => <div {...props} />;

const NavigationButtons = (props: any) => <div {...props} />;

const ScoringSummary = ({
  title,
  progressBar,
  subtotals,
  finalThoughts,
  feedbackSummary,
  navigationButtons,
  ...props
}: Props) => {
  return (
    <Container maxWidth="xs" style={{ flex: 1 }}>
      <FormPaper {...props}>
        <Title>{title}</Title>
        <ProgressBar>{progressBar}</ProgressBar>
        <StyledFormLabel>Subtotals: </StyledFormLabel>
        <Subtotals>{subtotals}</Subtotals>
        <StyledFormLabel>Final Thoughts: </StyledFormLabel>
        <FinalThoughts>{finalThoughts}</FinalThoughts>
        <StyledFormLabel>Feedback: </StyledFormLabel>
        <Inset>{feedbackSummary}</Inset>
        <NavigationButtons>{navigationButtons}</NavigationButtons>
      </FormPaper>
    </Container>
  );
};

export default ScoringSummary;
