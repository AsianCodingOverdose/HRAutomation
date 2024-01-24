import React, { useState } from 'react';
import '../CSS_Components/MainHeaderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faCaretDown , faClock } from '@fortawesome/free-solid-svg-icons';

const MainHeader = ({onHandleToggle}) => {

    const [onToggleShow, SetonToggleShow] = useState(false);

    return (
        <>
            <header className='MainHeaderContainer'>
                <FontAwesomeIcon className="BARZ" icon={faBars} onClick={onHandleToggle}/>
                <img className='Logo' src="http://ais.alliance.com.ph/images/asi-logo-light.png" alt='Alliance_logo' />
                <div className='TopRightDropDownMenuContainer'>
                    <button className='GoToPortal'>
                        <p><FontAwesomeIcon icon={faClock}/> Go To Portal</p>
                    </button>
                    <div className='TopRightProfile_Icon'>
                        <img src='https://placehold.co/50x50' alt='PP-Icon'/>
                    </div>
                    <button className={onToggleShow ? "DropDownButtonActive" : "DropDownButton"} onClick={ () => {SetonToggleShow(!onToggleShow)}}>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </button>
                </div>
                    <li className={onToggleShow ? "Logout_Form" : "Logout_Form_Hide"}>
                        <ul>
                            Log-Out
                        </ul>
                    </li>
            </header>
        </>
    )
}

export default MainHeader;