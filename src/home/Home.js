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
    
    return (
        <div className='home'>
            <div id="header">
                <h1>
                    <Typewriter options={{
                      strings: welcomeString,
                      autoStart: true,
                    }}/>
                </h1>
                <h3>
                    I'm Abhishek Kattuparambil. 
                    In May, I'll be graduating from the University of California, Berkeley with Bachelors Degrees in Computer Science and Astrophysics.
                </h3>
                <h3>
                    I have previously developed information review platforms at <span className='meta'><a href="https://about.fb.com/news/tag/civic-engagement/">Meta</a></span>, 
                    architected a next-gen ETL pipeline at <span  className='oracle'><a href="https://www.oracle.com/erp/financials/">Oracle</a></span>, and
                    built mobile applications at <span className='mdb'><a href="https://mdb.dev">MDB</a></span> and <span className='tekplay'><a href="https://tekplay.com">Tekplay Systems</a></span>. 
                    Currently, I am interested in applying ML/CV techniques to facilitate the automated analysis of physical systems. 
                </h3>
            </div>
            <World className='crop'/>
        </div>
    )
}

export default Home;
