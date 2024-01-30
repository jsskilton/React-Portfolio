import 'bootstrap/dist/css/bootstrap.min.css';
import * as boostrap from 'bootstrap';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import Contact from './pages/Contact'

function App() {
    
    return <>
    <NavBar />

        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects-gallery" element={<ProjectsGallery />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
}

export default App