import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MasterForm = () => {
  const [state, setState] = useState({
    currentStep: 1,
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = state;
    alert(`Your registration detail: \n 
           Email: ${email} \n 
           Username: ${username} \n
           Password: ${password}`);
  };

  const next = () => {
    let currentStep = state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setState({ ...state, currentStep: currentStep });
  };

  const prev = () => {
    let currentStep = state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setState({ ...state, currentStep: currentStep });
  };

  const previousButton = () => {
    let currentStep = state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={prev}>
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let currentStep = state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={next}
        >
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <h1>react multistep form</h1>
      <p>Step {state.currentStep} </p>

      <form onSubmit={handleSubmit}>
        <Step1
          currentStep={state.currentStep}
          handleChange={handleChange}
          email={state.email}
        />
        <Step2
          currentStep={state.currentStep}
          handleChange={handleChange}
          username={state.username}
        />
        <Step3
          currentStep={state.currentStep}
          handleChange={handleChange}
          password={state.password}
        />
        {previousButton()}
        {nextButton()}
      </form>
    </>
  );
};

export default MasterForm;
