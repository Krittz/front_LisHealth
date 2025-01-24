import { Link } from "react-router-dom";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";

const SignUp = () => {
    return (
        <div className="auth-box">
            <h1>Cadastre-se</h1>
            <form>
                <Input
                    id="signup-name"
                    type="text"
                    label="Nome"
                    placeholder="John Doe"
                    required={true}
                />
                <Input
                    id="signup-email"
                    type="email"
                    label="Email"
                    placeholder="seu.email@exemplo.com"
                />
                <Input
                    id="signup-password"
                    type="password"
                    label="Senha"
                    placeholder="**********"
                    required={true}

                />
                <Button
                    id="signup-btn"
                    type="submit"
                    content="Registrar"
                    variant="primary-btn"
                />
                <hr />

                <span>Já possui conta? <Link to="/login">Login</Link></span>

            </form>
        </div>
    );
}

export default SignUp;