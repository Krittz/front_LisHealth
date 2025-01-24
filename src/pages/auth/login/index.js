import './style.css';
import Input from "../../../components/ui/input";
import Button from '../../../components/ui/button';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="auth-box">
            <h1>Login</h1>
            <form>
                <Input
                    id="login-email"
                    type="email"
                    label="Email"
                    placeholder="seu.email@exemplo.com"
                    required={true}
                />
                <Input
                    id="login-password"
                    type="password"
                    label="Senha"
                    placeholder="**********"
                    required={true}
                />
                <Button
                    id="button-login"
                    content="Login"
                    type="submit"
                    variant="primary-btn"
                />
                <hr />
                <span>Não possui conta? <Link to="/signup" >Cadastre-se</Link></span>


            </form>
        </div>
    );
}
export default Login;