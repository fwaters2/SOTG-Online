import React from "react";
import { Paper, Container, Typography } from "@material-ui/core";
import { BLUE } from "../../../Components/Atoms/mycolors";
import StyledFormLabel from "../../../Components/StyledFormLabel";

interface Props {
  id?: any;
  title?: any;
  progressBar?: any;
  pillBox?: any;
  checkboxList?: any;
  currentFeedback?: string;
  additionalFeedback?: any;
  navigationButtons?: any;
}

const Wrapper = (props: any) => (
  <Paper
    style={{
      color: "white",
      backgroundColor: BLUE,
      borderRadius: "12px",
      marginBottom: "1em",
      padding: "2em",
    }}
    {...props}
  />
);

const Title = (props: any) => <Typography variant="h5" {...props} />;

const ProgressBar = (props: any) => <div {...props} />;

const PillBox = (props: any) => <div {...props} />;

const CheckboxList = (props: any) => <div {...props} />;

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
      <Wrapper {...props}>
        <Title>{title}</Title>
        <ProgressBar>{progressBar}</ProgressBar>
        <PillBox>{pillBox}</PillBox>
        <StyledFormLabel>FEEDBACK: </StyledFormLabel>
        <CheckboxList>{checkboxList}</CheckboxList>
        <CurrentFeedback>
          {currentFeedback !== "" && (
            <Typography variant="caption">{currentFeedback}</Typography>
          )}
        </CurrentFeedback>
        <AdditionalFeedback>{additionalFeedback}</AdditionalFeedback>
        <NavigationButtons>{navigationButtons}</NavigationButtons>
      </Wrapper>
    </Container>
  );
};

export default ScoringForm;
