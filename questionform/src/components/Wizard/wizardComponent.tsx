import React, { useState } from "react";
import '../Wizard/wizardComponent.css'

interface WizardProps {
  children: React.ReactNode;
}

const Wizard: React.FC<WizardProps> = ({ children }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

   const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
  };

  const goFinish = () => {
    setActivePageIndex((index) => index + 1)
  }

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <button type="button" className="wizard__buttons-left" onClick={goPrevPage}>
        Go Back
      </button>
    ) : null;

  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <button type="button" className="wizard__buttons-right" onClick={goNextPage}>
        Next Step
      </button>
    ) : null;

    const ButtonFinish = () => 
      activePageIndex == pages.length - 1 ? (
        <button type="button" className="wizard__buttons-right" onClick={goFinish}>
          Finish
        </button>
      ) : null;
    

  return (
    <div className="wizard">{currentPage}
      <div className="wizard__content">
        <div className="wizard__buttons">
          <ButtonPrev />
          <ButtonNext />
          <ButtonFinish />
        </div>
      </div>
    </div>
    
  );
  
};
export default Wizard;
