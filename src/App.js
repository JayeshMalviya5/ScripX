import React from "react";
import Landing from "./Component/Landing";
import Details from "./Component/Details";
import { Route, Routes, Navigate  } from "react-router-dom";
const App = () => { 
  return (
    <>
      <Routes>
        <Route exact path={"/"}  element={<Navigate to="/tv-shows/avengers" />} />
        <Route exact path={"tv-shows/avengers"}  element={<Landing />} />
        <Route exact path={"tv-shows/details/:key"} element={<Details />} />
      </Routes>
      
    </>
  );
};

export default App;
