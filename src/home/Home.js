import './style.css'
import World from './Earth/Earth';
import Typewriter from "typewriter-effect";

function Home() {
    const hrs = (new Date()).getHours();
    let welcomeString = 'Good Evening,'
    if (hrs > 4 && hrs < 12) {
        welcomeString = 'Good Morning,'
    } else if (hrs >= 12 && hrs < 18) {
        welcomeString = 'Good Afternoon,'
    }
    console.log(welcomeString)
    return (
        <div className='wrapper'>
            <div id="header">
                <h1>
                    <Typewriter options={{
                      strings: welcomeString,
                      autoStart: true,
                    }}/>
                </h1>
                <h3>
                    Nice to meet you, I'm Abhi. 
                    In May, I'll be graduating from the University of California, Berkeley with Bachelors Degrees in Computer Science and Astrophysics.
                </h3>
                <h3>
                    I have previously interned at <span style={{color: '#1877f2'}}>Meta</span> in a full-stack role, and developed a next-gen ETL pipeline at <span style={{color: '#c74634'}}>Oracle</span> using Apache Spark deployed on Kubernetes. 
                    Currently, I am interested in applying ML/CV techniques to facilitate the automated analysis of physical systems. 
                </h3>
            </div>
            <World className='crop'/>
        </div>
    )
}

export default Home;
