import img1 from '../images/logo.jpeg';
import '../Components/Login.css';
const Login = () => {

    
    return(
        <div className='page-container'>
            <div className='login'>
                <div className='login-content'>
                    <div className='leverageLogo'>
                        <img src={img1} className='image' alt='leverage logo' />
                    </div>
                    <form>
                        <div className='form-group'>
                            <label>E-mail :</label>
                            <input type="email" className='input'  required/>
                        </div>
                        <div className='form-group'>
                            <label>Password :</label>
                            <input type="password" className='input'  required/>
                        </div>
                        <button className='btn signup' type='submit' >Sign-In</button>
                        <p className='paragraphe'>You don't have an account ?</p>
                        <a href='/register' className='link' >Sign Up?</a>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login;