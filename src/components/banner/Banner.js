import './style.css'

const Banner = ({title, body, image, date, orient="orient-left"}) => {
    return (
        <section className={`spotlight style2 ${orient}`}>
            <div className="content">
                <div className="header">
                    <h2>{title}</h2>
                    <h2>                <i>{date}</i></h2>
                </div>
                <p>{body}</p>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </section>
    )
}

export default Banner;