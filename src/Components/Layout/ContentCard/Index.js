import React, { useState } from "react";
import './Style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons'

const ContentCard = () => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [mnumber, setMnumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [headcount, setHeadcount] = useState('');
    const [turnover, setTurnOver] = useState('');
    const [mreview, setMreview] = useState('');
    const [yreview, setYreview] = useState('');

     

    return(
        <div className='content-card'>
            <div className='title-card'>
                <h3>Dashboard</h3>
            </div>

            <div className='table-section'>
                        <main className='table'>
                            <section className='table-header'>
                                <h1>Customers List :</h1>
                            </section>

                            <section className='table-body'>
                                <table>
                                  <thead>
                                    <tr>
                                        <th>Fullname :</th>
                                        <th>Position :</th>
                                        <th>E-mail :</th>
                                        <th>Phone number :</th>
                                        <th>Company name :</th>
                                        <th>Company Type :</th>
                                        <th>Head Count :</th>
                                        <th>Turn Over :</th>
                                        <th>Mreview :</th>
                                        <th>Yreview :</th>
                                        
                                    </tr>
                                  </thead>
                                  <tbody>

                                    <tr>
                                        <td>Rania Elabed</td>
                                        <td>Web developer</td>
                                        <td>raniielabed@gmail.com</td>
                                        <td>0021696045097</td>
                                        <td>Leverage-FC</td>
                                        <td>Finance</td>
                                        <td>50</td>
                                        <td>50.000.000</td>
                                        <td>jboghohh</td>
                                        <td>jgogogo</td>
                                        
                                    </tr>
                                  
                                  </tbody> 
                                </table>
                            </section>
                        </main>
            </div>
        </div>
    )
}

export default ContentCard;