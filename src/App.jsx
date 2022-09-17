import styled from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";


const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: #f5f5f5;
`

function App() {
  return (
    <StyledApp>
      <SunIcon />
      <Switch />
      <MoonIcon />
      <h1>Michael Rodriguez</h1>
      <p>Username: IngNex</p>
      <p>Email: ingnexmaicol14@gmail.com</p>
    </StyledApp>
  );
}

export default App;