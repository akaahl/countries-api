import { useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [selected, setSelected] = useState("");
  const [themeColor, setThemeColor] = useState(false);

  return (
    <ThemeProvider theme={themeColor === false ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header themeColor={themeColor} setThemeColor={setThemeColor} />
        <MainContent selected={selected} setSelected={setSelected} />
      </div>
    </ThemeProvider>
  );
}

export default App;
