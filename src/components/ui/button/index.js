import './style.css';

const Button = ({ variant, content, type, id, onClick }) => {
    return (
        <>
            <button type={type} id={id} className={`${variant}`} onClick={onClick}>
                {content}
            </button>
        </>
    );
}

export default Button;