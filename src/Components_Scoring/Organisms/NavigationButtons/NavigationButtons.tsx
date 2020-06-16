import React from "react";
import { ButtonGroup } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { GREEN } from "../../../Components/Atoms/mycolors";
import Button from "../../Atoms/Button";

interface Props {
  id?: string;
  currentStep: number;
  setStep: Function;
}

const Wrapper = (props: any) => <div {...props} />;

const NavigationButtons = ({ ...props }: Props) => {
  const { currentStep, setStep } = props;

  const scrollToTop = () =>
    window.scrollTo({
      top: 120,
      behavior: "smooth",
    });

  const handleBack = () => {
    setStep(currentStep - 1);
    scrollToTop();
  };
  const handleNext = () => {
    setStep(currentStep + 1);
    scrollToTop();
  };
  return (
    <Wrapper {...props}>
      <ButtonGroup fullWidth>
        <Button
          style={{ padding: "1em 0", borderRadius: "8px 0 0 8px" }}
          variant="contained"
          color="default"
          onClick={handleBack}
        >
          <ArrowBack />
        </Button>
        <Button
          variant="contained"
          style={{
            padding: "1em 0",
            borderRadius: "0 8px 8px 0",
            background: GREEN,
            color: "black",
          }}
          onClick={handleNext}
        >
          <ArrowForward />
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default NavigationButtons;
