import { Component, useState } from "react";
import pic from "./images/IMG_2026.jpg";
import "./App.css";
import Display from "./Components/Display";
import Button from "./Components/Button";
import Icon from "./Components/Icon";
import Counter from "./Components/Counter";

function App() {
  const [info, setInfo] = useState("Will it work? Click Away");
  const handleName = () => {
    setInfo("My Name is Justin... Or is it?");
  };
  const handleSkill = () => {
    setInfo("I'm a Frontend Developer... This is fun");
  };

  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  // const likes = 0;
  //Test for clciker

  return (
    <section>
      <div className="profile-card">
        <img src={pic} />
        <h1>Hi!</h1>
        <Display title={info} />
        <div className="btn-container">
          <Button ClickHandler={handleName} btntext={"Name"} />
          <Button ClickHandler={handleSkill} btntext={"Skills"} />
        </div>
        <div className="like-count">
          <p className="num"> {count} </p>
          <Counter ClickHandler={handleCount} />
        </div>

        <a href="https://www.facebook.com/profile.php?id=100066264721827">
          <Icon />
        </a>
      </div>
    </section>
  );
}

export default App;
