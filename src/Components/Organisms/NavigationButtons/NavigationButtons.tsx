import React from "react";
import { ButtonGroup } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import Button from "../../Atoms/Button";
import ThemeContext from "../../../Assets/palette/default";

interface Props {
  id?: string;
  currentStep: number;
  setStep: Function;
}

const Wrapper = (props: any) => <div {...props} />;

const NavigationButtons = ({ setStep, ...props }: Props) => {
  const theme = React.useContext(ThemeContext);
  const { palette } = theme;

  const scrollToTop = () =>
    window.scrollTo({
      top: 120,
      behavior: "smooth",
    });

  const handleBack = () => {
    setStep("previous");
    scrollToTop();
  };
  const handleNext = () => {
    setStep("next");
    scrollToTop();
  };
  return (
    <Wrapper>
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
            background: palette.secondary,
            color: palette.onSecondary,
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
