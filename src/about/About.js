import './style.css'
import me1 from '../images/me1.jpeg'

function About() {
    return (
        <div className='about'>
            <div className='img_div'>
                <img className='me' src={me1} alt=''></img>
            </div>
            <h3>Hi again. I have educational and professional experience in full-stack development 
                and mobile applications, and I'm very passionate about the intersectional power of computer science.
                Machine learning for carbon emission removal, online infrastructure to empower small businesses, 
                computer vision for astronomical discoveries, among countless other possibilities.
                <br/><br/>
                In my free time, I love to study geography, cook, and play trivia. Before college, I played on the USA Under-19 Cricket Team
                and captained the NorthWest Regional Team before developing the knees of a 70-year old.
                Have fun checking out my work and feel free to reach out to me!
            </h3>
        </div>
    );
}

export default About;