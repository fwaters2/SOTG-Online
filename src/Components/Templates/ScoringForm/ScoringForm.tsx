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
  title: any;
  progressBar: any;
  pillBox: any;
  checkboxList: any;
  currentFeedback?: string;
  additionalFeedback: any;
  navigationButtons: any;
}

const Title = (props: any) => <Typography variant="h5" {...props} />;

const ProgressBar = (props: any) => <div {...props} />;

const PillBox = (props: any) => <div {...props} />;

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

const CurrentFeedback = (props: any) => (
  <div style={{ margin: "1em 0" }} {...props} />
);

const AdditionalFeedback = (props: any) => <div {...props} />;

const NavigationButtons = (props: any) => <div {...props} />;

const ScoringForm = ({
  title,
  progressBar,
  pillBox,
  checkboxList,
  currentFeedback,
  additionalFeedback,
  navigationButtons,
  ...props
}: Props) => {
  return (
    <Container maxWidth="xs" style={{ flex: 1 }}>
      <FormPaper {...props}>
        <Title>{title}</Title>
        <ProgressBar>{progressBar}</ProgressBar>
        <PillBox>{pillBox}</PillBox>
        <StyledFormLabel>FEEDBACK: </StyledFormLabel>
        <Inset>{checkboxList}</Inset>
        <CurrentFeedback>
          {currentFeedback !== "" && (
            <Typography variant="caption">{currentFeedback}</Typography>
          )}
        </CurrentFeedback>
        <AdditionalFeedback>{additionalFeedback}</AdditionalFeedback>
        <NavigationButtons>{navigationButtons}</NavigationButtons>
      </FormPaper>
    </Container>
  );
};

export default ScoringForm;
