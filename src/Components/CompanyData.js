import '../Components/data.css';
import React, { useState } from 'react';
import CompanyDataService from '../Services/CompanyDataService';

const CompanyData = () => {

    const [name, setName] = useState('');
    const [companytype, setCompanyType] = useState('');
    const [headcount, setHeadcount] = useState('');
    const [turnover, setTurnOver] = useState('');
    const [mreview, setMreview] = useState('');
    const [yreview, setYreview] = useState('');
    const addCompanyData = async(e)=>{

        e.preventDefault();
        console.log('form submitted !!');
        console.log('This is a form data', name, companytype, headcount, turnover, mreview, yreview);
        
         const data = {
             name : name,
             companytype : companytype,
             headcount : headcount,
             turnover : turnover,
             mreview : mreview,
             yreview : yreview
         }

         try{
            const response = await CompanyDataService.createCompanyData(data);
            console.log(response);
            
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className='personal-page-container'>
            <div className='company-data'>
                <div className='company-data-content'>
            
                    <div>
                        <h1 className='company-title'>Please enter your company data</h1>
                        <form onSubmit={addCompanyData}>
                            <div className='form-group'>
                                <label>Company name:</label>
                                <input type="text" className='input' value={name} onChange={(e)=>setName(e.target.value)}  required/>
                            </div>
                            <div className='form-group'>
                                <label>Company type :</label>
                                <input type="text" className='input' value={companytype} onChange={(e)=>setCompanyType(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Headcount</label>
                                <input type='text' className='input' value={headcount} onChange={(e)=>setHeadcount(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>turnover :</label>
                                <input type="number" className='input' value={turnover} onChange={(e)=>setTurnOver(e.target.value)}  required/>
                            </div>
                            <div className='form-group'>
                                <label>mreview :</label>
                                <input type="text" className='input' value={mreview} onChange={(e)=>setMreview(e.target.value)}  required/>
                            </div>
                            <div className='form-group'>
                                <label>yreview :</label>
                                <input type="text" className='input' value={yreview} onChange={(e)=>setYreview(e.target.value)} required/>
                            </div>
                            <button className='btn send-companyData' type='submit' >Send</button>
                        </form>
                </div>
            
        </div>
         </div>
        </div>
    )
}

export default CompanyData;


