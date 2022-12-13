import React, { Fragment } from "react";
import RouteService from "@/src/routes/RouteService";


require('./services/mock-adapter')

const App = () => {
  return (
    <Fragment>
      <RouteService />
    </Fragment>
  );
};

export default App;
