import React, { useState } from 'react';
import '../CSS_Components/MainContentStyle.css';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import SideNavBar from './SideNavBar';
import EmployeeRequestForm from './EmployeeRequestForm';


const MainContent = (props) => {

    const [SideNavToggle, SetSideNavToggle] = useState(false);
    const onHandleToggle = () => {
        SetSideNavToggle(!SideNavToggle) }

    return (
        <div className={"MainContentContainer"}>
            <MainHeader onHandleToggle={onHandleToggle} />
            <div className={SideNavToggle ? "MainContent_Inner_Hide" : "MainContent_Inner"}>
                <SideNavBar SideNavToggle={SideNavToggle}/>
                <div className="MainContentProfileContainer">
                    <div className="MainContentProfileInner">

                        <EmployeeRequestForm />
                        
                    </div>
                </div>
            </div>
            <MainFooter />  
        </div>    
    )
}

export default MainContent;