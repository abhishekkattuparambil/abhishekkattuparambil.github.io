import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '../home/Home'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import Alignment from '../projects/cv/Alignment'
import Blend from '../projects/cv/Blend'
import Morph from '../projects/cv/Morph'
import Mosaic from '../projects/cv/Mosaic'
import Detection from '../projects/cv/Detection'
import GDF from '../projects/cv/GDF'
import Style from '../projects/cv/Style'




function NavigationBar() {
    return (
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Abhishek Kattuparambil</Navbar.Brand>
            <Navbar.Toggle className='basic-navbar-nav'/>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to={"/experience"}>Experience</Nav.Link>
                    <Nav.Link as={Link} to={"/projects"}>Projects</Nav.Link>
                    <Nav.Link as={Link} to={"/skills"}>Skills</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default function WebPage() {
    return (
        <Router>
            <div>
                {NavigationBar()}
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
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
