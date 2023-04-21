import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';


const Principal = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 20% auto;

 ` 
function App() {
  return (
    <Principal>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Proyectos' element={<Projects />}/>
        <Route path='/Conocimientos' element={<Skills />}/>
      </Routes>
    </Principal>
  );
}

export default App;
