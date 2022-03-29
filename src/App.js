import React, { useState } from "react";
import { persons } from "./data";
import List from "./List";
function App() {
  const [peple, setPeple] = useState(persons);
  return (
    <main>
      <section className="container">
        <h3>{peple.length} Birthdays today</h3>
        <List peple={peple} />
        <button onClick={() => setPeple([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
