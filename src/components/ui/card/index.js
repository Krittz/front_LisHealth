import './style.css';
const Card = ({ icon, title, content }) => {
    return (
        <div className="card">
            <i className={`bx ${icon}`}></i>
            <span className="card-info">
                <p>{content}</p>
                <h2>{title}</h2>
            </span>
        </div>
    );
}
export default Card;

