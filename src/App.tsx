import React, { useEffect } from "react";
import "./App.css";
import "./firebaseconfig";
import CodeHandler from "./CodeHandler/code-handler";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Menu from "./misc/Menu";
import { useAppSelector } from "./store/hooks";
import { useGetPoints } from "./hooks/pointsHooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9357fd",
    },
    secondary: {
      main: "#F4831B",
    },
  },
});

function App() {
  const fullScreen = useAppSelector((state) => state.misc.fullScreen);
  useGetPoints();

  const screenSize = window.innerWidth;

  useEffect(() => {
    document.title = "Halloween 2026";
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {!fullScreen && (
          <header className="App-header">
            <div>Halloween 2026</div>
            <Menu />
          </header>
        )}
        <div
          className="app-content"
          style={{ maxWidth: fullScreen ? undefined : "600px" }}
        >
          <CodeHandler />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
