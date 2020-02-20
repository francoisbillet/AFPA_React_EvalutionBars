import React from "react";
import Bar from "./Bar";
import { useParams } from "react-router-dom";

const useBar = bars => {
  const { id } = useParams();
  const bar = bars.find(bar => bar.id === id);
  return bar;
};

const BarPage = props => {
  const bar = useBar(props.bars);
  return (
    <React.Fragment>
      <Bar bar={bar} addLikeToBar={props.addLikeToBar} displayDetails />
    </React.Fragment>
  );
};

export default BarPage;
