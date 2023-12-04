import React, {useState} from 'react';
import img1 from '../images/logo.jpeg';
import '../Components/Register.css';
import UserService from '../Services/UserService';
const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = async(e) => {
        e.preventDefault();
        console.log('form submitted !')
        console.log('This is a form data', name, email, password);

        const data = {
            name : name,
            email : email,
            password : password
        }

        try{
            const response = await UserService.register(data)
            console.log(response);
        }catch(err){
            console.log(err);
            console.log(err.message);
        }
        
    }
    return(
        <div className='page-container'>
         <div className='register'>
            <div className='register-content'>
                <div className='leverageLogo'>
                    <img src={img1} className='image' alt='leverage logo' />
                </div>
                <div className='form'>
                    <form onSubmit={register}>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input type="text" className='input' value={name} onChange={ (e)=> setName(e.target.value)}  required/>
                        </div>
                        
                        <div className='form-group'>
                            <label>E-mail :</label>
                            <input type="email" className='input' value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        </div>
                        <div className='form-group'>
                            <label>Password :</label>
                            <input type="password" className='input' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <button className='btn signup' type='submit' >Sign-Up</button>
                        <p className='paragraphe'>Already registered</p>
                        <a href='/login' className='link' >Sign In?</a>
                        
                    </form>
                </div>
            </div>
        </div>

        </div>
    )
}


export default Register;