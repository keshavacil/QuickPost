const StepContent = ({ selectedPlatform, currentStep }) => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3>Step 1: Platform Overview</h3>
            <p>Details about {selectedPlatform}...</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Step 2: Platform Settings</h3>
            <p>Settings and configurations for {selectedPlatform}...</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Step 3: Final Review</h3>
            <p>Review your information for {selectedPlatform}...</p>
          </div>
        );
      default:
        return <div>Invalid step</div>;
    }
  };
  
  export default StepContent;
  