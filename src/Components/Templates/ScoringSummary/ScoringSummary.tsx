import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  FormLabel,
  useMediaQuery,
} from "@material-ui/core";
import json2mq from "json2mq";
import ThemeContext from "../../../Assets/palette/default";
import FormPaper from "../../Molecules/FormPaper";
import { BLUE } from "../../../Assets/palette/colors";

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
  const isMobile = useMediaQuery(
    json2mq({
      maxWidth: 600,
    })
  );
  const AppContainer = (props: any) =>
    isMobile ? (
      //this Blue background is a hack to get rid of the rounded edges
      <div {...props} style={{ flex: 1, background: BLUE }} />
    ) : (
      <Container maxWidth="xs" style={{ flex: 1 }} {...props} />
    );
  return (
    <AppContainer>
      <FormPaper {...props}>
        <Title>{title}</Title>
        <ProgressBar>{progressBar}</ProgressBar>
        <StyledFormLabel>Subtotals: </StyledFormLabel>
        <Subtotals>{subtotals}</Subtotals>
        <StyledFormLabel>Your Teams Feedback: </StyledFormLabel>
        <Inset>{feedbackSummary}</Inset>
        <StyledFormLabel>Final Thoughts: </StyledFormLabel>
        <FinalThoughts>{finalThoughts}</FinalThoughts>
        <NavigationButtons>{navigationButtons}</NavigationButtons>
      </FormPaper>
    </AppContainer>
  );
};

export default ScoringSummary;
