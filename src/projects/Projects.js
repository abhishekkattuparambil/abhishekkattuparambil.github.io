import {Link} from 'react-router-dom';
import './style.css'
import p1 from '.././images/p1.jpg'
import p2 from '.././images/p2.jpg'
import p3 from '.././images/p3.png'
import p4 from '.././images/p4.png'
import p5 from '.././images/p5.png'
import p6 from '.././images/p6.jpg'
import p7 from '.././images/p7.jpg'

import l1 from '.././images/l1.png'
import l2 from '.././images/l2.png'
import l3 from '.././images/l3.png'
import l4 from '.././images/l4.png'

import pdf1 from '.././pdfs/p1.pdf'
import pdf2 from ".././pdfs/p2.pdf"
import pdf3 from ".././pdfs/p3.pdf"
import pdf4 from ".././pdfs/p4.pdf"

const cv = [
    {link: "/projects/alignment", name: "Colorizing the Prokudin-Gorskii Collection", desc: "", img: p1},
    {link: "/projects/blending", name: "Frequencies & Multiresolution Blending", desc: "project1", img: p2},
    {link: "/projects/morphing", name: "Face Morphing", desc: "project1", img: p3},
    {link: "/projects/mosaic", name: "Auto-Stitching Photo Mosaics", desc: "project1", img: p4},
    {link: "/projects/detection", name: "Facial Keypoint Detection", desc: "project1", img: p5},
    {link: "/projects/gdf", name: "Gradient Domain Fusion", desc: "project1", img: p6},
    {link: "/projects/style", name: "Artistic Style Transfer", desc: "project1", img: p7}]

const astro = [
    {title: "Stellar Property Estimations via Isochrone Fitting", pdf: pdf1, img: l1},
    {title: "Deriving the Galactic Dust Map via the Period-Color Relation", pdf: pdf2, img: l2},
    {title: "Galaxy Morphology Classifications with Convolutional Neural Networks", pdf: pdf4, img: l4},
    {title: "Stellar Parameter Estimation via APOGEE Spectra", pdf: pdf3, img: l3},
]

function Projects() {
    return (
        <div className="wrapper">
          {/*CV header*/}
          <h1>Computer Vision</h1>
          <hr/>
          {/*CV projects*/}
          <div className="row">
            {cv.map((proj, i) => {
              return (
                <div key={i} className='project'>
                  <img src={proj.img} alt=""/>
                  <Link to={proj.link}>
                    <div className='overlay'>
                      <h2>{proj.name}</h2>
                      <h3>{proj.desc}</h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        {/*Astro header*/}
          <h1>Astrophysics</h1>
          <hr/>
          {/*Astro projects*/}
          <div className="row">
            {astro.map((proj, i) => {
              return (
                <div key={i} className="project">
                  <img src={proj.img} alt=""/>
                  <a href={proj.pdf}>
                    <div className="overlay">
                      <h2>{proj.title}</h2>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
      </div>
    )
}

export default Projects;