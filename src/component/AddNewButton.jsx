import React from 'react';



const AddNewButton = ({href, title})=> (
    <a href={href}>
        <button className='btn btn-info'>{title}</button>
    </a>
)



export default AddNewButton;