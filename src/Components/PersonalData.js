import '../Components/data.css';
import React, { useState } from 'react';
import PersonalDataService from '../Services/PersonalDataService';

const PersonalData = () => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [mnumber, setMNumber] = useState('');
    const addPersonalData = async(e)=>{
        e.preventDefault();
        console.log('form submitted');
        console.log('this is a form data', name, position, email, mnumber);
        const data = {
            name : name,
            position : position,
            email : email,
            mnumber : mnumber
        }
        try{
            const response = await PersonalDataService.createPersonalData(data);
            console.log(response);
            
        }catch(err){
            console.log(err);
        }
    }
    return(
      <div className='personal-page-container'>
        <div className='data'>
             <div className='data-content'>
            
                <div>
                    <h1 className='personnal-title'>Please enter your personal data</h1>
                    <form onSubmit={addPersonalData}>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input type="text" className='input' value={name} onChange={(e)=>setName(e.target.value)}  required/>
                        </div>
                        <div className='form-group'>
                            <label>Position:</label>
                            <input type="text" className='input' value={position} onChange={(e)=>setPosition(e.target.value)} required/>
                        </div>
                        <div className='form-group'>
                            <label>E-mail :</label>
                            <input type="email" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className='form-group'>
                            <label>Phone Number :</label>
                            <input type="number" className='input' value={mnumber} onChange={(e)=>setMNumber(e.target.value)} required/>
                        </div>
                        <button className='btn send' type='submit' >Send</button>
                    </form>
                </div>
            
             </div>
        </div>
      </div>
    )
}


export default PersonalData;