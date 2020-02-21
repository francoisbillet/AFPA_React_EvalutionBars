import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import BarPage from "./Components/BarPage";
import MePage from "./Components/MePage";
import Footer from "./Components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import createPersistedState from "use-persisted-state";

const usePersistedState = createPersistedState("bars");

const useBars = () => {
  const [bars, setBars] = usePersistedState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const addLikeToBar = bar => {
    setBars(
      bars.map(element => {
        if (element.id === bar.id) {
          return {
            ...element,
            nbLike: element.nbLike + 1
          };
        } else {
          return element;
        }
      })
    );
  };
  React.useEffect(() => {
    fetch(`https://control-server.now.sh/`)
      .then(body => body.json())
      .then(response => {
        setError(null);
        if (bars.length !== 0) {
          setBars(
            bars.map(bar => {
              const serverBar = response.find(element => element.id === bar.id);
              return { ...serverBar, nbLike: bar.nbLike };
            })
          );
        } else {
          setBars(response);
        }
      })
      .catch(() => {
        setError("Une erreur est survenue");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return [bars, addLikeToBar, isLoading, error];
};

function App() {
  const [bars, addLikeToBar, isLoading, error] = useBars();
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage bars={bars} isLoading={isLoading} error={error} />
        </Route>
        <Route exact path="/bar/:id">
          <BarPage
            bars={bars}
            addLikeToBar={addLikeToBar}
            isLoading={isLoading}
            error={error}
          />
        </Route>
        <Route exact path="/me">
          <MePage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
