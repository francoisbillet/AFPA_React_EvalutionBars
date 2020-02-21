import React from "react";

const MePage = () => {
  const [myInfos, setMyInfos] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://control-server.now.sh/me`)
      .then(body => body.json())
      .then(response => {
        setMyInfos(response);
        setError(null);
      })
      .catch(() => {
        setError("Une erreur est survenue");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const DisplayText = () => {
    if (error) {
      return <p className="bar-box">Une erreur est survenue</p>;
    }
    if (isLoading) {
      return <p className="bar-box">Loading...</p>;
    }
    return <p className="bar-box">{myInfos}</p>;
  };

  return (
    <div>
      <h1 className="main-title">A propos de moi</h1>
      {/* <p className="bar-box">{!isLoading ? myInfos : "Loading..."}</p> */}
      <DisplayText />
    </div>
  );
};

export default MePage;
