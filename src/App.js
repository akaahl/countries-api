import { useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <MainContent selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
