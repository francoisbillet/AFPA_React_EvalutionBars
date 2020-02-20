import React from "react";

const MePage = () => {
  const [myInfos, setMyInfos] = React.useState("");
  React.useEffect(() => {
    fetch(`https://control-server.now.sh/me`)
      .then(body => body.json())
      .then(response => {
        setMyInfos(response);
      });
  }, []);
  //   console.log(myInfos);
  return (
    <div>
      <h1 className="main-title">A propos de moi</h1>
      <p className="bar-box">{myInfos}</p>
    </div>
  );
};

export default MePage;
