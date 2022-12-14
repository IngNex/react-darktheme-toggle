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
  transition: all .25s ease;
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
  icon: "#fff",
}
const lightTheme = {
  body: "#fff",
  title: "#000",
  subtitle: "#000",
  icon: "#000",
}

function App() {

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme: lightTheme}>
      <StyledApp>
        <Name color="red">Theme light and dark</Name>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
        <MoonIcon />
        <Name color="red">Michael Rodriguez</Name>
        <Info>Username: IngNex</Info>
        <Info>Email: ingnexmaicol14@gmail.com</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;