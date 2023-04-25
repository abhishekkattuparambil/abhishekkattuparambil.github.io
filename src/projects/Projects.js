import {Link} from 'react-router-dom';
import './style.css'
import p1 from '.././images/p1.jpg'
import p2 from '.././images/p2.jpg'
import p3 from '.././images/p3.gif'
import p4 from '.././images/p4.png'
import p5 from '.././images/p5.png'
import p7 from '.././images/p7.gif'
import p8 from '.././images/truck.gif'

import l1 from '.././images/l1.png'
import l2 from '.././images/l2.png'
import l3 from '.././images/l3.png'
import l4 from '.././images/l4.png'

import pdf1 from '.././pdfs/p1.pdf'
import pdf2 from ".././pdfs/p2.pdf"
import pdf3 from ".././pdfs/p3.pdf"
import pdf4 from ".././pdfs/p4.pdf"

const cv = [
    {link: "/projects/alignment", name: "Colorizing the Prokudin-Gorskii Collection", desc: "Using Sergei Mikhailovich Prokudin-Gorskii’s RGB plate exposures of the Russian Empire, feature matching techniques (SDD, NCC, Scharr edge maps) align and layer each plate such that a high-quality colored image is produced.", img: p1},
    {link: "/projects/blending", name: "Frequencies and Multiresolution Blending", desc: "Creating edge detectors with directional gradient filters. Procedural blurring and sharpening using multivariate Gaussian kernels. Multi-resolution blending by weighting Laplacian and Gaussian stacks at various frequency bands.", img: p2},
    {link: "/projects/morphing", name: "Face Morphing", desc: "Using Delaunay triangulations to create correspondences, create smooth face morphing by computing a simultaneous warp of image shape and cross-dissolve of image colors. Further extrapolation of morphing algorithm to computing mean faces of populations and drawing caricatures.", img: p3},
    {link: "/projects/style", name: "Artistic Style Transfer", desc: "Developed a neural model to synthesize artistic style and draw a given image using learned techniques, specifically emphasizing patterns and color scheme. In the example, the model has redrawn an image of the Painted Ladies in the style of Starry Nights.", img: p7},
    {link: "/projects/detection", name: "Facial Keypoint Detection", desc: "Using PyTorch, developed a neural network to automatically detect 58 specified facial key points. Used for automated morphing and tracking.", img: p5},
    {link: "/projects/mosaic", name: "Auto-Stitching Photo Mosaics", desc: "Recovered homography matrices and performed perspective warps to stitch panoramas together. Automated with Harris Interest Point Detector, ANMS, feature extraction, and RANSAC algorithms.", img: p4},
    {link: "/projects/lightfield", name: "Lightfield Camera", desc: "Procedural depth refocusing and aperture adjustment based on Stanford Light Field Archive lightfield camera data. ", img: p8}]

const astro = [
    {title: "Stellar Property Estimations via Isochrone Fitting", pdf: pdf1, img: l1, desc: 'Fitting GAIA stellar clusters to isochrones on a color-magnitude (HR) diagram to estimate their stellar properties.'},
    {title: "Deriving the Galactic Dust Map via the Period-Color Relation", pdf: pdf2, img: l2, desc:'Fitting Fourier models to GAIA light curve data for selected RR Lyrae sources. Created a galactic dust map by estimating absolute magnitudes of RR Lyrae with a best-fit period-magnitude relation.'},
    {title: "Galaxy Morphology Classifications with Convolutional Neural Networks", pdf: pdf4, img: l4, desc:'Developed a tool for automatic inference of GZ2 galaxy images, estimating morphological features with high confidence. Experimentation and comparisons for novel and ResNet models. '},
    {title: "Stellar Parameter Estimation via APOGEE Spectra", pdf: pdf3, img: l3, desc:'Built a generative model trained on ASPCAP labels, such that forward-propagated least squares can predict a stellar spectra from labels, and a backwards nonlinear optimizer can derive stellar labels given a spectra.'},
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
                  {/*  <Link to={proj.link}> */}
                    <div className='overlay'>
                      <h2>{proj.name}</h2>
                      <h3>{proj.desc}</h3>
                    </div>
                  {/*  </Link> */}
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
                      <h3>{proj.desc}</h3>
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