"use client";
import { useState } from "react";
import Certificate from "./certificate";
import Key from "./key";
import Ready from "./ready";

const OnboardingSteps = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);

  return (
    <>
      <Certificate current={step === 0} goToNextStep={() => setStep(1)} />
      <Key
        current={step === 1}
        goToNextStep={() => setStep(2)}
        goToPreviousStep={() => setStep(0)}
      />
      <Ready goToPreviousStep={() => setStep(1)} current={step == 2} />
    </>
  );
};

export default OnboardingSteps;
