import '../Components/Layout/Navbar/Style.css';
import ContentCard from './Layout/ContentCard/Index';
import Navbar from './Layout/Navbar/Index';
import Sidebar from './Layout/Sidebar/Index';
import UsernameCard from './Layout/UsernameCard/Index';
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className='dashboard-container'>
            

                <Navbar />
                <div className='layout-app' >
                    <div style={{width:"20%"}}>
                        <UsernameCard />
                        <Sidebar />
                    </div>
                
                    <div style={{width:"80%"}}><ContentCard /></div>
                </div>
                
                
            
        </div>
    )
}


export default Dashboard;