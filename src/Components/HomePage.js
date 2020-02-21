import React from "react";
// import Bar from "./Bar";
import BarList from "./BarList";

const HomePage = props => {
  const DisplayBars = () => {
    if (props.error) {
      return <p className="bar-box">Une erreur est survenue</p>;
    }
    if (props.isLoading) {
      return <p className="bar-box">Loading...</p>;
    }
    return <BarList bars={props.bars} />;
  };
  //   console.log(!props.bars);
  return (
    <React.Fragment>
      <h1 className="main-title">Les bars de Toulouse</h1>
      <DisplayBars />
    </React.Fragment>
  );
};

export default HomePage;
