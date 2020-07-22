import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  FormLabel,
  useMediaQuery,
} from "@material-ui/core";

import ThemeContext from "../../themes/default";
import FormPaper from "../../Molecules/FormPaper";
import json2mq from "json2mq";
import { BLUE } from "../../themes/colors";
import LangSelection from "../../Organisms/LangSelection";

interface Props {
  id?: any;
  title: any;
  langSelectorIcon: any;
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
  langSelectorIcon,
  progressBar,
  pillBox,
  checkboxList,
  currentFeedback,
  additionalFeedback,
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
        <div style={{ display: "flex" }}>
          <Title style={{ flex: 1 }}>{title}</Title>
          <LangSelection>{langSelectorIcon}</LangSelection>
        </div>
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
    </AppContainer>
  );
};

export default ScoringForm;
