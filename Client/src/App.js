import './App.css';
import styled from 'styled-components';
import { Route, Routes, useNavigate  } from 'react-router-dom';
import { Nav } from './components/nav/nav';
import { Home } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { useState } from 'react';
import { Landing } from './components/landing/landing';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { projects } from './redux/actions/actions';

const Principal = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 20% auto;

 ` 
function App() {
  const [landing, setLanding] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  useEffect(() => {
    if (landing === true) {
      navigate('/landing');
    }else{
      navigate(state.redirection)
    }
  }, [landing]);
  useEffect(() => {
    setLanding(state.landing)
  }, [state.landing]);
  if(landing === true){
    if(state.projects.length === 0){
      axios.get("http://localhost:3001/projects")
        .then(response =>{
            dispatch(projects(response.data))
        })
    }
  
    return(
      <Routes>
        <Route path='landing' element={<Landing />}/>
      </Routes>
    )
  }

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
