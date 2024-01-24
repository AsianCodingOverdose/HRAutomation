import React from 'react';
import '../CSS_Components/SideNavBarStyle.css';

const SideNavBar = ({SideNavToggle}) => {

    return (
        <div className={SideNavToggle ?  "SideNavBarContainerHide" : "SideNavBarContainer"}>
            <div className="SideNav-User">
                <div className='Profile_IconContainer'>
                    <img className='Profile_Icon' src='https://placehold.co/60x60' alt='Nav-Icon' />
                </div>
                <div className='Name_Role'>
                    <p className='FullName'>Charles Darwin, Espina</p>
                    <p className='Role'>Technical Specialist</p>
                </div>
            </div>
            <li>
                <ul> 
                    <img src='https://placehold.co/30x30' alt='Nav-Icon'/> 
                    <p>Employee Request Form</p> 
                </ul>
                <ul> 
                    <img src='https://placehold.co/30x30' alt='Nav-Icon' />
                    <p> Public Application Form </p>    
                </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon' />
                    <p> Interviews </p> 
                 </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon' />
                    <p> Background Check </p> 
                </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon' />
                    <p> Job Offer </p> 
                </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon'/>
                    <p> Pre-Employment Requirements </p>
                </ul>
                <ul> 
                    <img src='https://placehold.co/30x30' alt='Nav-Icon'/>
                    <p> Onboarding Training </p>
                </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon'/>
                    <p> Onboarding Training </p>
                </ul>
                <ul>
                    <img src='https://placehold.co/30x30' alt='Nav-Icon'/>
                    <p> Configuration of Approvers </p>
                </ul>
            </li>
        </div>
    )
}

export default SideNavBar;