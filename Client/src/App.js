import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import { Nav } from "./components/navs/Nav"
import { Home } from './components/Home/Home';
import styled from 'styled-components';
import tw from 'twin.macro';

const Main = styled.main`
  ${tw`
  bg-black
  `}
  height:100%;
`
function App() {
  return (
    <Main>
      <GlobalStyle/>
      <Nav/>
      <Home />
    </Main>
  );
}

export default App;
