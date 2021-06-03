import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'


const Activity = (props) => {
    return ( 
            <div class="block md:block xl:block md:w-100">
                <h3 class="font-semibold">{props.heading}</h3>
                <p class="font-normal overflow-ellipsis">{props.info}</p>
            </div>
     );
}
 
export default Activity;