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
      });
  }, []);
  return [bars, addLikeToBar];
};

function App() {
  const [bars, addLikeToBar] = useBars();
  // console.log(bars);
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/">
          <HomePage bars={bars} />
        </Route>
        <Route exact path="/bar/:id">
          <BarPage bars={bars} addLikeToBar={addLikeToBar} />
        </Route>
        <Route exact path="/me">
          <MePage />
        </Route>
      </Switch>
      <hr />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
