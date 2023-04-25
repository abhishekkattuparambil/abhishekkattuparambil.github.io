import './style.css'

const Banner = ({loc,title, team, role="Software Engineering Intern", body, image, date}) => {
    return (
        <div className={team === "" ? 'club' : 'experience'}>
            <div className='banner'>
                <div className='details'>
                    <h2>{title}</h2>
                    <h3>{role}</h3>
                    <h3>{team}</h3>
                    <h3>{loc}</h3>
                    <h3>{date}</h3>
                </div>
                <div className='logo'>
                    <img className='image' src={image} alt={title + 'Logo'}></img>
                </div>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default Banner;