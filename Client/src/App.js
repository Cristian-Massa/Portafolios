import './App.css';
import { GlobalStyle } from './components/GlobalStyles';
import { Nav } from "./components/navs/Nav"
import { Home } from './components/Home/Home';
import background from './utils/background.mp4'
import axios from 'axios'
import { useEffect } from 'react';

//redux

import { projects } from "./redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Projects } from './components/Projects/projects';

function App() {
  const store = useSelector(store => store.projects)
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
  useEffect(() => {
    console.log(store)
  }, [store])
  return (
    <main>
      <GlobalStyle />
      <video src={background} autoPlay muted loop controls />
      <Nav />
      <Home />
      <Projects />
    </main>
  );
}

export default App;
