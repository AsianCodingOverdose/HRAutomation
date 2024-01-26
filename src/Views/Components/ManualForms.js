import React from "react";
import Select from "react-select";


const ManualForms = ( {Selection , TextLabel = "DefaultTitle" , FormType , Placeholder , Options} ) => {

    switch(Selection) {
        case 1:
            return (
                <>
                    <form className="FormGroups">
                        <label>{TextLabel}</label>
                        <input type={FormType} placeholder={Placeholder}/>
                    </form>
                </>
            );
        case 2:
            return (
                <>
                    <div className="FormGroups">
                        <label>{TextLabel}</label>
                        <Select options={Options} />
                    </div>
                </>
            );
        default:
            break;
    }
}

export default ManualForms;