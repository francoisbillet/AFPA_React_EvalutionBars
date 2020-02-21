import React from "react";
import Bar from "./Bar";
import { useParams, Redirect } from "react-router-dom";

const BarPage = props => {
  const { id } = useParams();
  const DisplayBar = () => {
    if (props.error) {
      return <p className="bar-box">Une erreur est survenue</p>;
    }
    if (props.isLoading) {
      return <p className="bar-box">Loading...</p>;
    }
    const bar = props.bars.find(bar => bar.id === id);
    if (!bar) {
      return <Redirect to="/" />;
    }
    return <Bar bar={bar} addLikeToBar={props.addLikeToBar} displayDetails />;
  };
  return (
    <React.Fragment>
      <DisplayBar />
    </React.Fragment>
  );
};

export default BarPage;
