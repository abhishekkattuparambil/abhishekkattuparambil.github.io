import './style.css'
import sunset_triple from './images/alignment/sunset_triple.jpeg'
import melons_triple from './images/alignment/melons_triple.jpeg'
import general_triple from './images/alignment/general_triple.jpeg'
import mosque_triple from './images/alignment/mosque_triple.jpeg'
import woman_triple from './images/alignment/woman_triple.jpeg'

import e1 from './images/alignment/e1.jpg'
import e2 from './images/alignment/e2.jpg'
import e3 from './images/alignment/e3.jpg'
import s1 from './images/alignment/s1.jpg'
import s2 from './images/alignment/s2.jpg'
import s3 from './images/alignment/s3.jpg'
import m1 from './images/alignment/m1.jpg'
import m2 from './images/alignment/m2.jpg'
import m3 from './images/alignment/m3.jpg'
import scharr from './images/alignment/scharr.png'

import cathedral from './images/alignment/cathedral.jpg'
import church from './images/alignment/church.jpg'
import city from './images/alignment/city.jpg'
import emir from './images/alignment/emir.jpg'
import general from './images/alignment/general.jpg'
import harvesters from './images/alignment/harvesters.jpg'
import icon from './images/alignment/icon.jpg'
import lady from './images/alignment/lady.jpg'
import monastery from './images/alignment/monastery.jpg'
import onion_church from './images/alignment/onion_church.jpg'
import sculpture from './images/alignment/sculpture.jpg'
import selfie from './images/alignment/selfie.jpg'
import tobolsk from './images/alignment/tobolsk.jpg'
import train from './images/alignment/train.jpg'
import woman from './images/alignment/woman.jpg'
import yurt from './images/alignment/yurt.jpg'
import zindeh from './images/alignment/zindeh.jpg'
import raft from './images/alignment/raft.jpg'
import three_generations from './images/alignment/three_generations.jpg'
import boat from './images/alignment/boat.jpg'
import emir2 from './images/alignment/emir2.jpg'
import cross from './images/alignment/cross.jpg'
import gunman from './images/alignment/gunman.jpg'
import church2 from './images/alignment/church2.jpg'
import hay from './images/alignment/hay.jpg'
import kid from './images/alignment/kid.jpg'
import mosque from './images/alignment/mosque.jpg'
import room from './images/alignment/room.jpg'
import flowers from './images/alignment/flowers.jpg'
import railroad from './images/alignment/railroad.jpg'

function Alignment() {
    return (
        <div>
            {/*Title*/}
            <h1>Colorizing the Prokudin Gorskii Collection</h1>

            {/*Background Section*/}
            <h2>Background</h2>
            <p>Sergei Mikhailovich Prokudin-Gorskii (1863-1944) was a Russian chemist and photographer, best known for his work in color photography during his travels. With a railroad-car darkroom provided by Tsar Nicholas II, he took thousands of images across the Russian country using a form of three-plate color photography. From 1909 to 1915, Sergei traversed the Russian landscape, taking pictures of almost everything hue saw along the way: buildings, landscapes, railroads, bridges, and much more. He was a man well ahead of his time; he envisioned that children could enroll in “multimedia” classes where they could learn about their country through color images taken on RGB glass plates. These images, each taken thrice through a red, green, and blue filter, have been composed to create a beautiful snapshot of Russia’s history. Following his death, thousands of these three-plate negatives were obtained by the Library of Congress, which is the source of all data used in this project. </p>

            <h2>Alignment</h2>
            <p>Each image is of the same subject, and has been centered as well as humanly possible. Therefore, we begin by shifting each plate to the center of the red plate. In this manner, we can apply a simple transformation to ensure each image has been centered correctly. To complete this matching, we employ NCC (normalized cross-correlation) and SSD (sum of squared differences). Over most of the images, SSD performed much better and produced more visually appealing results. However, this approach using pixel brightness values did not work for images with large portions dominated by red, green, or blue. Since both algorithms perform well when matching fine details and edges, such homogenous images must be aligned via a different methodology. Furthermore, since the translation misalignment can be of any magnitude, we must search over quite a large area to find the true center of the image. To accelerate this iterative process, we create an image pyramid, subsampling the image to a lower resolution (0.25x) at each layer. In this manner, we can utilize a 4-layer pyramid to perform an initial search over an image which is 256x smaller than the original. Once the image has been aligned on the coarser level, we can search a 4-pixel area on the next level and find the true center in fewer iterations. </p>

            {/*Triple Gallery Section*/}
            <div className="gallery">
                <img className='pentalogy' src={melons_triple} alt=""/>
                <img className='pentalogy' src={mosque_triple} alt=""/>
                <img className='pentalogy' src={general_triple} alt=""/>
                <img className='pentalogy' src={sunset_triple} alt=""/>
                <img className='pentalogy' src={woman_triple} alt=""/>
            </div>

            <p>All images below are created by aligning and combining three-plate glass negativesm provided in BGR-order (Blue-Red-Green from top to bottom). All have been sourced from the Library of Congress, with a few being of much higher resolution.</p>

            {/*Scharr Edges*/}
            <div className="panel">
                <img src={scharr} alt=""/>
                <p>This image, <it>The Emir of Bukhara</it>, made it clear that SSD on the pixel brightnesses was not robust enough to handle pictures with large color concentrations. To correct for the illusion of misalignment due to color variance across each plate, we decided to employ SSD on the Scharr edge map of the image. The Scharr edge method, similar to a simple edge detector, uses first derivatives via a convolution over both axes to determine edges in the image. Since these edges are independent of color, SSD performs more robustly across the plates and results in a clearer resulting alignment. 
                </p>
            </div>

            {/*Emir Comparison*/}
            <div className="gallery">
                <figure>
                    <img className='trilogy' src={e1} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={e2} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={e3} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
            </div>

            {/*Sunset Comparison*/}
            <div className="gallery">
                <figure>
                    <img className='trilogy' src={s1} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={s2} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={s3} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
            </div>

            {/*Melons Comparison*/}
            <div className="gallery">
                <figure>
                    <img className='trilogy' src={m1} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={m2} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
                <figure>
                    <img className='trilogy' src={m3} alt=""/>
                    <figcaption>Emir One.</figcaption>
                </figure>
            </div>

            {/*Grid*/}
            <div className='grid'>
                <img src={cathedral} alt=""/>
                <img src={church} alt=""/>
                <img src={city} alt=""/>
                <img src={e3} alt=""/>
                <img src={emir} alt=""/>
                <img src={general} alt=""/>
                <img src={harvesters} alt=""/>
                <img src={icon} alt=""/>
                <img src={lady} alt=""/>
                <img src={m3} alt=""/>
                <img src={monastery} alt=""/>
                <img src={onion_church} alt=""/>
                <img src={raft} alt=""/>
                <img src={s3} alt=""/>
                <img src={sculpture} alt=""/>
                <img src={selfie} alt=""/>
                <img src={three_generations} alt=""/>
                <img src={tobolsk} alt=""/>
                <img src={train} alt=""/>
                <img src={woman} alt=""/>
                <img src={yurt} alt=""/>
                <img src={zindeh} alt=""/>
                <img src={boat} alt=""/>
                <img src={emir2} alt=""/>
                <img src={cross} alt=""/>
                <img src={gunman} alt=""/>
                <img src={church2} alt=""/>
                <img src={hay} alt=""/>
                <img src={kid} alt=""/>
                <img src={mosque} alt=""/>
                <img src={room} alt=""/>
                <img src={flowers} alt=""/>
                <img src={railroad} alt=""/>
            </div>
        </div>
    )
}

export default Alignment;