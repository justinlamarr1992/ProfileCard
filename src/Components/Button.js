import React from "react";

function Button({ ClickHandler, btntext }) {
  return (
    <button className="btn" onClick={ClickHandler}>
      {btntext}
    </button>
  );
}

export default Button;
