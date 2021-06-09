import React from 'react';
import {FaPenAlt, FaPencilAlt} from 'react-icons/fa'

const Duties = (props) => {
    return ( 
        <div class="border-solid border border-gray-500 items-center" style={{width: "31.3333%", margin: "1%", height: "23rem"}}>
            <div class="flex justify-center">
                {props.component}
            </div>
            <p>something</p>
        </div>
     );
}
 
export default Duties;
