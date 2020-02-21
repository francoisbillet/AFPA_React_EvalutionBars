import React from "react";
import Bar from "./Bar";

const BarList = props => {
  return (
    <ul>
      {props.bars.map(bar => (
        <li key={bar.id}>
          <Bar bar={bar} />
        </li>
      ))}
    </ul>
  );
};

export default BarList;
