import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const icon = <FontAwesomeIcon icon={faFacebook} size="2x" />;

function Icon() {
  return <div className="icon">{icon}</div>;
}

export default Icon;
