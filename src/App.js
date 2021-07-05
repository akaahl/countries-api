import { useState } from "react";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

function App() {
  const [selected, setSelected] = useState("");
  const [themeColor, setThemeColor] = useState(false);
  const [apiUrl, setApiUrl] = useState("https://restcountries.eu/rest/v2/all");

  return (
    <ThemeProvider theme={themeColor === false ? lightTheme : darkTheme}>
      <div className="App">
        <GlobalStyles />
        <Header
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          setApiUrl={setApiUrl}
          setSelected={setSelected}
        />
        <MainContent
          selected={selected}
          setSelected={setSelected}
          apiUrl={apiUrl}
          setApiUrl={setApiUrl}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
