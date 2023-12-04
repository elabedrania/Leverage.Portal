import React from "react";
import './Style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPeopleGroup, faPersonThroughWindow, faBuilding, faPlusMinus, faGears } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-menu'>
                <a className='active'> {" "}  <FontAwesomeIcon icon={faHome} className='me-3'/> <b>Home</b></a>
                <a> {" "}  <FontAwesomeIcon icon={faPeopleGroup} className='me-3'/>  <b>Costumers</b></a>
                <a> {" "}  <FontAwesomeIcon icon={faPersonThroughWindow} className='me-3' /> <b> Personal data</b> </a>
                <a> {" "}  <FontAwesomeIcon icon={faBuilding} className='me-3' />  <b>Company data</b> </a>
                <a> {" "}  <FontAwesomeIcon icon={faPlusMinus} className='me-3' />  <b>Others</b></a>
                <a> {" "}  <FontAwesomeIcon icon={faGears} className='me-3' />  <b>Settings</b></a>
            </div>
        </div>
    )
}


export default Sidebar;