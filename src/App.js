import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './home/Home'
import About from './about/About.js'
import Projects from './projects/Projects'
import Education from './education/Education'
import Experience from './experience/Experience'
import Alignment from './projects/cv/Alignment'
import Blend from './projects/cv/Blend'
import Morph from './projects/cv/Morph'
import Mosaic from './projects/cv/Mosaic'
import Detection from './projects/cv/Detection'
import GDF from './projects/cv/GDF'
import Style from './projects/cv/Style'

function App() {
  return (
    <Router>
        <div>
            {Navbar()}
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path="/projects/alignment" element={<Alignment/>}/>
                <Route path="/projects/blending" element={<Blend/>}/>
                <Route path="/projects/morphing" element={<Morph/>}/>
                <Route path="/projects/mosaic" element={<Mosaic/>}/>
                <Route path="/projects/detection" element={<Detection/>}/>
                <Route path="/projects/gdf" element={<GDF/>}/>
                <Route path="/projects/style" element={<Style/>}/>
                <Route path="/experience" element={<Experience/>}/>
            </Routes>
        </div>
    </Router>
);
}

export default App;
