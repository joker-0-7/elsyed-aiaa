import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormModalOne from "../components/FormModalOne";
import FormModalTwo from "../components/FormModalTwo";

const steps = ["عنوان الشحن", "وسائل الدفع", "استكمال الدفع", "تم الانتهاء"];

export default function HorizontalLinearStepper({
  show,
  setShow,
  handleSubmit,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return false;
    // step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    show && (
      <div
        className="position-fixed"
        style={{
          height: "100vh",
          width: "100%",
          zIndex: "2",
          backgroundColor: "rgba(6, 10, 15, 0.15)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            width: "40%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "65%",
            zIndex: "99",
            backgroundColor: "#F5F5F5",
          }}
          className="position-fixed p-5 d-flex justify-content-between flex-column rounded-5"
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  pt: 2,
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>
                  <span className="btn btn-primary w-100">ارسال</span>
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {activeStep == 0 && <FormModalOne />}
                {activeStep == 1 && <FormModalTwo />}
                {activeStep == 2 && "two"}
                {activeStep == 3 && "three"}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button> */}
                <Box sx={{ flex: "1 1 auto" }} />
                {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

                <Button onClick={handleNext} className="w-100">
                  <span
                    className="btn btn-primary w-100 fs-5 fw-bold"
                    onClick={() => {
                      activeStep === steps.length - 1
                        ? setShow(false)
                        : handleSubmit();
                    }}
                  >
                    {activeStep === steps.length - 1 ? "انهاء" : "ارسال"}
                  </span>
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    )
  );
}
