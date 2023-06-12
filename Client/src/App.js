import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import { Nav } from "./components/navs/Nav"
import { Home } from './components/Home/Home';
import background from './utils/background.mp4'

function App() {
  return (
    <main>
      <video src={background} autoPlay muted loop controls/>
      <GlobalStyle/>
      <Nav/>
      <Home />
    </main>
  );
}

export default App;
