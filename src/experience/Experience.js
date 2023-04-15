import './style.css'
import Banner from '../components/banner/Banner.js'

import meta from '../images/meta.png'
import oracle from '../images/oracle.png'
import mdb from '../images/mdb.png'
import tekplay from '../images/tekplay.jpeg'

function Experience() {
    return (
        <div className='experience'>
            <h1>Work Experience</h1>
            <hr className='wide'/>
            <Banner title="Meta Platforms" 
                body="I was a member of the Civic Connections Team, aiming to improve civic engagement on the Facebook platform. During my internship, I created a tool for users to create and review authoritative information attachments. These are facts from authoritative sources available for public use, aimed to improve civic discourse. I built these webpages using React, used a GraphQL API layer, and developed the backend in Hack (PHP)." 
                image={meta}
                orient="orient-right"
                date="5/22 - 8/22"/>
            <hr/>
            <Banner title="Oracle Corporation" 
                body="I returned to the Fusion Financials Team, where I worked on improving the performance of the ERP pipeline we had architected last summer. I improved the extract and load capabilities of our pipeline, improving performance by another 35%. Furthermore, I added functionality for reversal transactions and invalid request by developing a PL/SQL package. Additionally, I ensured the job was restartable and implemented a precise checkpointing system. " 
                image={oracle}
                date="5/21 - 8/21"/>
            <hr/>
            <Banner title="Oracle Corporation" 
                body="I joined the Fusion Financials Team, where we developed a new ERP pipeline for large ETL jobs. Rather than using PL/SQL validations, the new process was built using Apache Kafka alongside Spark ETL jobs, which produced a speedup of roughly 10x." 
                image={oracle}
                orient="orient-right"
                date="5/20 - 8/20"/>
            <hr/>
            <Banner title="Tekplay Systems LLC" 
                body="During this internship, I worked closely with my mentor to develop “The Offer”, a mobile app aiming to streamline the event-planning process. We developed this cross-platform app in C# on Xamarin, and prototyped it in Java on Android Studios. " 
                image={tekplay}
                date="6/18 - 8/18"/>
            <h1>Extracurricular Experience</h1>
            <hr className='wide'/>
            <Banner title="Mobile Developers of Berkeley" 
                body="During this internship, I worked closely with my mentor to develop “The Offer”, a mobile app aiming to streamline the event-planning process. We developed this cross-platform app in C# on Xamarin, and prototyped it in Java on Android Studios. " 
                image={mdb}
                orient="orient-right"
                date="8/20 - Present"/>
        </div>
    )
}

export default Experience;
