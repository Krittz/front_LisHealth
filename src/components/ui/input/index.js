import './style.css';

const Input = ({ label, type, id, value, placeholder, required, onChange }) => {
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
                required={required}
                onChange={onChange}
            />
        </div>
    );
}

export default Input;