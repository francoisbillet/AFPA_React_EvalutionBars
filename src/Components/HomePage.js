import React from "react";
import Bar from "./Bar";

const HomePage = props => {
  //   console.log(!props.bars);
  if (props.bars.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <React.Fragment>
        <h1 className="main-title">Les bars de Toulouse</h1>
        <ul>
          {props.bars.map(bar => (
            <li key={bar.id}>
              <Bar bar={bar} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
};

export default HomePage;
