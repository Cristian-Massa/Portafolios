import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import { Nav } from "./components/navs/Nav"
import { Home } from './components/Home/Home';
import background from './utils/background.mp4'
import axios from 'axios'
import { useEffect } from 'react';

//redux

import { projects } from "./redux/actions/actions";
import { useDispatch } from "react-redux";
import { Projects } from './components/Projects/projects';
import { Form } from './components/Form/Form';

//functions
import { ScrollNav } from './functions/ScrollNav/scrollNav';

function App() {
  const dispatch = useDispatch()
  // consiguiendo los proyectos
  useEffect(() => {
    axios.get('http://localhost:3001/projects')
      .then(response => {
        dispatch(projects(response.data))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  return (
    <main>
      <GlobalStyle />
      <video src={background} autoPlay muted loop controls />
      <Nav />
      <Home id="Home" />
      <Projects id="Projects"/>
      <Form />
      <ScrollNav />
    </main>
  );
}

export default App;
