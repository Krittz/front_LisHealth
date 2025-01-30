import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import Notification from "../../../components/global/notification";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            const response = await fetch("http://localhost:8000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });


            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                });
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Erro ao registrar usuário.");
            }
        } catch (err) {
            setError("Erro de conexão com o servidor.");
        }
    };

    return (
        <div className="auth-box">

            <h1>Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    id="name"
                    type="text"
                    label="Nome"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={false}
                />
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="seu.email@exemplo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required={false}
                />
                <Input
                    id="password"
                    type="password"
                    label="Senha"
                    placeholder="**********"
                    value={formData.password}
                    onChange={handleInputChange}
                    required={false}
                />
                <Input
                    id="password_confirmation"
                    type="password"
                    label="Repetir senha"
                    placeholder="**********"
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    required={false}
                />
                <Button
                    id="signup-btn"
                    type="submit"
                    content="Registrar"
                    variant="primary-btn"
                />
                <hr />
                <span>
                    Já possui conta? <Link to="/login">Login</Link>
                </span>


            </form>
            {success && <Notification
                type="success"
                title="Usuário cadastrado com sucesso!"
                content="Usuário cadastrado, acesse a página de login e se entre com as credênciais cadastradas!"
            />}

            {error && <Notification
                type="error"
                title="Erro ao cadastrar usuário."
                content={error}
            />}
        </div>
    );
};

export default SignUp;
