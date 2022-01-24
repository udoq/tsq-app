import React from "react";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <h1 className="font-extrabold text-4xl my-10 flex justify-center">TSQ Verwaltung</h1>
      <div>
        <Categories category="HipHop" />
        <Categories category="Kindertanz" />
        <Categories category="Paartanz" />
      </div>
    </div>
  );
}

export default App;
