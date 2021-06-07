import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'tailwindcss/tailwind.css'


const Activity = (props) => {
    return ( 
            <div class="h-56 p-2 md:p-3 lg:p-4 block md:block xl:block md:w-4/12 xl:w-4/12 md:bg-gray sm:w-full}">
            {/* // <div style={{display: "block", width: "33.333333%", background: props.color}}>    */}
                <h3 class="font-semibold">{props.heading}</h3>
                <p class="font-normal overflow-ellipsis break-words">{props.info}</p>
            </div>
     );
}
 
export default Activity;