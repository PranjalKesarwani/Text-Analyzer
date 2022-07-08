 import React from 'react'


export default function Alert(props) {

   const capitalize = (word)=>{
    const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) + '!'
   }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div id='alert' className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)} </strong> {props.alert.msg}
                
            </div>}
        </div>
    )
}
 //CLS- It is cumulative layout shift it happens when the layout of the website changed due to appearance of alert or any other component