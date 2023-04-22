import './style.css'
import seal from '../images/seal.png'
export default function Education() {
    return (
        <div className="ed">
            <h1>Education</h1>
            <hr className='wide'></hr>
            <div className='university'>
                <img src={seal} alt="Seal for the University of California, Berkeley"></img>
                <div>
                    <h2>University of California, Berkeley</h2>
                    <h3>GPA: 3.81/4.00</h3>
                    <h3>B.A. Computer Science, B.S. Astrophysics</h3>
                    <h3>August 2019 - May 2023</h3>
                </div>
            </div>
        </div>
    )
}