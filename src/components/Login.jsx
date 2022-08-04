import './Login.css'
import Logo from '../assets/imgs/logo.png'

export default props => {
    return (
        <>

            <div className="container">

                <div className="box-area-logo">
                    <div className="footer">
                        <span>Desenvolvido por Walisson Gomes</span>
                    </div>
                </div>
                <div className="box-area-login">
                    <div className="footer">
                        <span>Desenvolvido por <strong>Walisson Gomes</strong></span>
                    </div>
                </div>
                <div className="card-logo">
                    <div className="logo">
                        <img className="logo"src={Logo} alt="" />
                    </div>
                </div>

                <div className="card-login">
                    <div id="login">
                        <form method="post" action="">
                            <h1 className='login-title'>Login</h1>
                            <p>
                                <label for="email_login">Email </label>
                                <input id="email_login" name="email_login" required="required" type="text" placeholder="Digite seu e-mail..." />
                            </p>

                            <p>
                                <label for="senha_login">Senha </label>
                                <input id="senha_login" name="senha_login" required="required" type="password" placeholder="Digite sua senha..." />
                            </p>

                            <p>
                                <input type="checkbox" name="manterlogado" id="manterlogado" value="" />
                                <label for="manterlogado">Manter-me logado</label>
                            </p>

                            <p>
                                <input type="submit" value="Login" />
                            </p>
                            <div className="link">
                                <p className="link">
                                    Ainda não tem conta?
                                    <a href="#">Cadastre-se</a>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}