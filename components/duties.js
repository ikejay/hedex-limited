import React from 'react';
import {FaPenAlt, FaPencilAlt} from 'react-icons/fa'

const Duties = (props) => {
    return (
        <div class="items-center sm:w-full  xl:w-1/3 h-80" >
            <div class="flex xl:m-4 border-solid border border-gray-500 h-full">
                <div className="flex justify-center">
                    {props.component}
                </div>
                <p>something</p>
            </div>
        </div>
     );
}

export default Duties;
