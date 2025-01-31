import './style.css';
import Input from "../../../components/ui/input";
import Button from '../../../components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Notification from '../../../components/global/notification';


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erro ao efetuar login.");
            }
            setSuccess(true);
            setFormData({ email: "", password: "" });
        } catch (err) {
            setError(err.message || "Erro desconhecido.")
        }
    };


    return (
        <div className="auth-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"
                    required={false}
                />
                <Input
                    id="password"
                    type="password"
                    label="Senha"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="**********"
                    required={false}
                />
                <Button
                    id="login-btn"
                    type="submit"
                    content="Login"
                    variant="primary-btn"
                />
                <hr />
                <span>Não possui conta? <Link to="/signup" >Cadastre-se</Link></span>
            </form>
            {success && <Notification
                type="success"
                title="Bem-vindo(a)!"
                content="Usuário autenticado com sucesso, aproveite o sistema!"
            />}
            {error && <Notification
                type="error"
                title="Erro ao efetuar login."
                content={error}
            />}
        </div>
    );
}
export default Login;