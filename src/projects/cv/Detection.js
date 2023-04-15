import './style.css'

import nose1 from './images/detection/nose1.png'
import nose2 from './images/detection/nose2.png'
import nose3 from './images/detection/nose3.png'

import face0 from './images/detection/face0.png'
import face1 from './images/detection/face1.png'
import face2 from './images/detection/face2.png'

import layer1 from './images/detection/layer1.png'
import layer2 from './images/detection/layer2.png'
import layer3 from './images/detection/layer3.png'

import nose_1 from './images/detection/nose_1.png'
import nose_2 from './images/detection/nose_2.png'
import nose_3 from './images/detection/nose_3.png'
import nose_4 from './images/detection/nose_4.png'

import face_predict1 from './images/detection/face_predict1.png'
import face_predict2 from './images/detection/face_predict2.png'

import pred2 from './images/detection/pred2.png'
import pred4 from './images/detection/pred4.png'
import pred8 from './images/detection/pred8.png'
import color2 from './images/detection/color2.png'
import color4 from './images/detection/color4.png'
import color8 from './images/detection/color8.png'

import d1 from './images/detection/d1.png'
import d2 from './images/detection/d2.png'
import h1 from './images/detection/h1.png'
import h2 from './images/detection/h2.png'

import f0 from './images/detection/0.png'
import f1 from './images/detection/1.png'
import f2 from './images/detection/2.png'

import belafonte from './images/detection/belafonte.png'
import dafoe from './images/detection/dafoe.png'
import glock from './images/detection/glock.png'

import b from './images/detection/belafonte.jpeg'
import d from './images/detection/dafoe.jpeg'
import g from './images/detection/glock.jpeg'

import bheat from './images/detection/belafonte_heat.jpeg'
import dheat from './images/detection/dafoe_heat.jpeg'
import gheat from './images/detection/glock_heat.jpeg'


function Detection() {
    return (
        <div>
            {/*Title*/}
            <h1>Keypoint Detection via Convolutional Neural Networks</h1>

            {/*Background*/}
            <h2>Background</h2>

            {/*Nose Detection*/}
            <h1>Nose Detection</h1>

            {/*Nose*/}
            <div className="gallery">
                <img className='trilogy' src={nose1} alt=""/>
                <img className='trilogy' src={nose2} alt=""/>
                <img className='trilogy' src={nose3} alt=""/>
            </div>

            {/*Nose*/}
            <div className="gallery">
                <img className='tetralogy' src={nose_1} alt=""/>
                <img className='tetralogy' src={nose_2} alt=""/>
                <img className='tetralogy' src={nose_3} alt=""/>
                <img className='tetralogy' src={nose_4} alt=""/>
            </div>

            {/*Approach*/}
            <h2>Approach</h2>

            {/*Facial Keypoint Detection*/}
            <h1>Facial Keypoint Detection</h1>

            {/*Nose*/}
            <div className="gallery">
                <img className='trilogy' src={face0} alt=""/>
                <img className='trilogy' src={face1} alt=""/>
                <img className='trilogy' src={face2} alt=""/>
            </div>

            {/*Approach*/}
            <h2>Approach</h2>

            {/*Nose*/}
            <div className="gallery">
                <img className='duo' src={face_predict1} alt=""/>
                <img className='duo' src={face_predict2} alt=""/>
            </div>

            {/*Visualizations*/}
            <div className="gallery">
                <img className='trilogy' src={layer1} alt=""/>
                <img className='trilogy' src={layer2} alt=""/>
                <img className='trilogy' src={layer3} alt=""/>
            </div>

            {/*IBUG Classifiication*/}
            <h1>IBUG Classification</h1>
            {/*A*/}
            <div className="gallery">
                <img className='duo' src={pred2} alt=""/>
                <img className='duo' src={color2} alt=""/>
            </div>
            {/*B*/}
            <div className="gallery">
                <img className='duo' src={pred4} alt=""/>
                <img className='duo' src={color4} alt=""/>
            </div>
            {/*C*/}
            <div className="gallery">
                <img className='duo' src={pred8} alt=""/>
                <img className='duo' src={color8} alt=""/>
            </div>

            {/*Approach*/}
            <h2>Context</h2>

            {/*Life Aquatic*/}
            <div className="gallery">
                <img className='trilogy' src={f0} alt=""/>
                <img className='trilogy' src={f1} alt=""/>
                <img className='trilogy' src={f2} alt=""/>
            </div>

            {/*Predictions*/}
            <div className="gallery">
                <img className='trilogy' src={belafonte} alt=""/>
                <img className='trilogy' src={dafoe} alt=""/>
                <img className='trilogy' src={glock} alt=""/>
            </div>

            {/*Pixelwise robablistic Classifier*/}
            <h1>Pixelwise Probablistic Classifier</h1>

            {/*A*/}
            <div className="gallery">
                <img className='duo' src={d1} alt=""/>
                <img className='duo' src={h1} alt=""/>
            </div>
            {/*B*/}
            <div className="gallery">
                <img className='duo' src={d2} alt=""/>
                <img className='duo' src={h2} alt=""/>
            </div>

            {/*Approach*/}
            <h2>Approach</h2>

             {/*Life Aquatic*/}
             <div className="gallery">
                <img className='trilogy' src={bheat} alt=""/>
                <img className='trilogy' src={dheat} alt=""/>
                <img className='trilogy' src={gheat} alt=""/>
            </div>

            {/*Predictions*/}
            <div className="gallery">
                <img className='trilogy' src={b} alt=""/>
                <img className='trilogy' src={d} alt=""/>
                <img className='trilogy' src={g} alt=""/>
            </div>

            {/*Life Aquatic*/}
            <h1>The Life Aquatic</h1>
        </div>
    )
}

export default Detection;