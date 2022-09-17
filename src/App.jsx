import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";


const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props)=> props.theme.body};
`
const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`
const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`
const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
}
const lightTheme = {
  body: "#fff",
  title: "#000",
  subtitle: "#000",
}

function App() {

  const [theme, useTheme] = useState("light");
  const isDarkTheme = theme === "light";

  return (
    <ThemeProvider theme={lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch />
        <MoonIcon />
        <Name color="red">Michael Rodriguez</Name>
        <Info>Username: IngNex</Info>
        <Info>Email: ingnexmaicol14@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;