import './style.css'
import me1 from '../images/me1.jpeg'

function About() {
    return (
        <div className='about'>
            <img className='me' src={me1} alt=''></img>
            <h3>Hi again. I have educational and professional experience in full-stack development 
                and mobile applications, and I'm very passionate about the intersectional power of computer science for good.
                From machine learning for carbon emission removal to full-stack solutions for public awareness to 
                distributed systems for data democretization to computer vision for astronomical discoveries, the 
                possiblities are endless.
                <br/><br/>
                In my free time, I love to learn geography, cook, and play trivia. Before college, I was on the USA Under-19 Cricket Team
                and captained the NorthWest Regional Team before developing the knees of a 70-year old. Have fun checking out my work and feel free to reach out 
                to me below!
            </h3>
        </div>
    );
}

export default About;