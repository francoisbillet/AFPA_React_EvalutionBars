import React from "react";
import { Link } from "react-router-dom";

const Bar = props => {
  //   console.log(props.bar);
  if (!props.bar) {
    return <div>Loading</div>;
  } else {
    return (
      <React.Fragment>
        {props.displayDetails ? (
          <h1 className="main-title">{props.bar.title}</h1>
        ) : null}
        <section className="bar-box">
          {props.displayDetails ? (
            <h2>{props.bar.address}</h2>
          ) : (
            <h2>{props.bar.title}</h2>
          )}

          <p>{props.bar.description}</p>
          {props.displayDetails ? (
            <React.Fragment>
              {`${props.bar.nbLike} likes`}
              <button onClick={() => props.addLikeToBar(props.bar)}>🖤</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to={`/bar/${props.bar.id}`}>En savoir plus</Link>
              <span className="beers">🍻🍻🍻</span>
            </React.Fragment>
          )}
        </section>
      </React.Fragment>
    );
  }
};

export default Bar;
