import './style.css';

const Input = ({ label, type, id, value, placeholder, required }) => {
    return (
        <div className="input-field">
            <label >
                {label}

            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                required={require ? 'true' : 'false'}
            />
        </div>
    );
}

export default Input;