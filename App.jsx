import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Web19204 from "./components/Web19204";
import Web19205 from "./components/Web19205";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|web-1920-4)">
          <Web19204
            title="Nixnet.tv"
            place="Home"
            preview="Preview"
            welcomeToTheNixne={
              <React.Fragment>
                Welcome to the nixnet.tv site, where we’re building a free and ad-free site where you can <br />
                watch your favorite shows. Right now, though, we’re setting things up, but in the meantime,
                <br />
                you can watch this free preview. We’ll let you know when we’re ready to launch.
              </React.Fragment>
            }
          />
        </Route>
        <Route path="/web-1920-5">
          <Web19205 {...web19205Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const web19205Data = {
    nixnetTv: "Nixnet.tv",
    preview: "Preview",
    aPreviewOfNixnet: "A preview of nixnet.tv, presented by our animated host, Sam.",
    nixnetTvPreview1: "Nixnet.tv Preview",
    nixnetTvPreview2: "Nixnet.tv Preview",
    availableFrom314: <React.Fragment>Available from: 3/14/2022<br />Available until: 12/31/9999</React.Fragment>,
    season11: "Season 1",
    season12: "Season 1",
    place: "Back",
};

