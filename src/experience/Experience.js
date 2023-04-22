import './style.css'
import Banner from '../components/banner/Banner.js'

import meta from '../images/meta.png'
import oracle from '../images/oracle.png'
import mdb from '../images/mdb.png'
import tekplay from '../images/tekplay.png'

function Experience() {
    return (
        <div className='page'>
            <h1>Work</h1>
            <hr className='wide'/>
            <Banner 
                loc="Menlo Park, CA"
                team = "Civic Engineering"
                title="Meta" 
                body="I joined the the Civic Engineering Team, aiming to improve civic engagement on the Facebook platform. During my internship, I created a tool for users to create and review authoritative information attachments. These are facts from authoritative sources available for public use, aimed to improve civic knowledge, awareness, and discourse. I built webpages for the vetting process using React, used a GraphQL API layer, and developed the backend in Hack (PHP)." 
                image={meta}
                date="May 2022 -  Aug 2022"/>
            <Banner 
            loc="Redwood City, CA"
            flex = "row-reverse"
            team = "Fusion Financials"
                title="Oracle" 
                body="I returned to the Fusion Financials Team, where I worked on improving the performance of the ERP pipeline we had architected last summer. I improved the extract and load capabilities of our pipeline, improving performance by another 35%. Furthermore, I added functionality for reversal transactions and invalid request by developing a PL/SQL package. Additionally, I ensured the job was restartable and implemented a precise checkpointing system. " 
                image={oracle}
                date="May 2021 - August 2021"/>
            <Banner 
            loc="Redwood City, CA"
                team = "Fusion Financials"
            title="Oracle" 
                body="I joined the Fusion Financials Team, where we developed a new ERP pipeline for large ETL jobs. Rather than using PL/SQL validations, the new process was built using Apache Kafka alongside Spark ETL jobs, which produced a speedup of roughly 10x. We measured performance by deploying Spark on Kubernetes, and used OCI DataFlow for preliminary testing." 
                image={oracle}
                date="May 2020 - August 2020"/>
            <Banner 
            loc="San Jose, CA"
            flex = "row-reverse"
            team = "Mobile Development"
            title="Tekplay Systems" 
                body="During this internship, I worked closely with my mentor to develop “The Offer”, a mobile app aiming to streamline the event-planning process. We developed this cross-platform app in C# on Xamarin, and prototyped it in Java on Android Studios. " 
                image={tekplay}
                date="May 2018 - August 2018"/>
            <h1>Extracurricular</h1>
            <hr className='wide'/>
            <Banner 
                team = ""
                role = ""
                loc="Berkeley, CA"
                title="Mobile Developers of Berkeley" 
                body="When I first joined MDB, I completed two intensive programs in Swift and React Native development, comprising twelve mini projects. Furthermore, I have worked on the contract team to develop a React Native application for an external client, and have served on social committee to focus on member development and integration." 
                image={mdb}
                date="August 2020 - Present"/>
        </div>
    )
}

export default Experience;
