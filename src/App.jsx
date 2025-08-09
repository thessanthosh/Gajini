import React from "react";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Main } from "./Components/Main/Main";

export const App = () => {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
