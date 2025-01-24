import './style.css';

const Button = ({ variant, content, type, id }) => {
    return (
        <>
            <button type={type} id={id} className={`${variant}`}>
                {content}
            </button>
        </>
    );
}

export default Button;