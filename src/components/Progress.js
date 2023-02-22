import React from "react";
import { Link, useLocation } from "react-router-dom";

const Progress = () => {
  const { pathname } = useLocation();
  const isFirstStep = pathname === "/";
  const isSecondStep = pathname === "/second";
  const isThirdStep = pathname === "/third";
  const isFinalStep = pathname === "/final";

  return (
    <React.Fragment>
      <div className="steps">
        <div className={`${isFirstStep ? "step active" : "step"}`}>
          <div>1</div>
          <div>{isSecondStep ? <Link to="/">Step 1</Link> : "Step 1"}</div>
        </div>
        <div className={`${isSecondStep ? "step active" : "step"}`}>
          <div>2</div>
          <div>{isThirdStep ? <Link to="/second">Step 2</Link> : "Step 2"}</div>
        </div>
        <div className={`${isThirdStep ? "step active" : "step"}`}>
          <div>3</div>
          <div>{isFinalStep ? <Link to="/third">Step 3</Link> : "Step 3"}</div>
        </div>
        <div className={`${isFinalStep ? "step active" : "step"}`}>
          <div>4</div>
          <div>Final</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Progress;
