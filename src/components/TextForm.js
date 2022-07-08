import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // if (newText === '') {
        //     props.showAlert('Write something in the text area.', 'warning');
        // }
        // else {

        //     props.showAlert('Converted to Uppercase', 'success');
        // }
        props.showAlert('Converted to Uppercase', 'success');

    }

    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        let textArea = document.getElementById('myBox');
        // textArea.select();
        //   textArea.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(textArea.value);
        // document.getSelection().removeAllRanges();
        props.showAlert('Text copied', 'success');
    }

    const clearText = () => {
        let textArea = document.getElementById('myBox');
        setText(textArea.value = '');
        props.showAlert('Text area cleared', 'success');
    }

    const extraSpaceHandler = () => {
        let arr = text.split(/[ ]+/); //Now this step will return array 

        setText(arr.join(' '));
        props.showAlert('Extra spaces has been removed', 'success')
        props.showAlert('Extra space has been removed', 'success');
    }

    return (
        <>
        
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
            </div>
            <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={handleLowerClick}>Convert to lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={copyText}> Copy text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={clearText}>Clear text</button>
            <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={extraSpaceHandler}>Remove extra spaces</button>
            <hr />
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length - text.split(" ").length + 1} characters</p>
            <p>Reading time: {0.8 / 250 * (text.split(/[ ]+/).length - 1)} minutes</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? `${text}` : `${'Nothing to preview!'}`}</p>
           
        </>
    )
}









// import React, { useState } from 'react'


// export default function TextForm(props) {
//     const [text, setText] = useState('Enter text here');

//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText);
//         // if (newText === '') {
//         //     props.showAlert('Write something in the text area.', 'warning');
//         // }
//         // else {

//         //     props.showAlert('Converted to Uppercase', 'success');
//         // }
//         props.showAlert('Converted to Uppercase', 'success');

//     }

//     const handleLowerClick = () => {
//         let newText = text.toLowerCase();
//         setText(newText);
//         props.showAlert('Converted to Lowercase', 'success');
//     }

//     const handleOnChange = (event) => {
//         setText(event.target.value);
//     }

//     const copyText = () => {
//         let textArea = document.getElementById('myBox');
//         // textArea.select();
//         //   textArea.setSelectionRange(0, 99999); /* For mobile devices */
//         /* Copy the text inside the text field */
//         navigator.clipboard.writeText(textArea.value);
//         // document.getSelection().removeAllRanges();
//         props.showAlert('Text copied', 'success');
//     }

//     const clearText = () => {
//         let textArea = document.getElementById('myBox');
//         setText(textArea.value = '');
//         props.showAlert('Text area cleared', 'success');
//     }

//     const extraSpaceHandler = () => {
//         let arr = text.split(/[ ]+/); //Now this step will return array 

//         setText(arr.join(' '));
//         props.showAlert('Extra spaces has been removed', 'success')
//         props.showAlert('Extra space has been removed', 'success');
//     }

//     return (
//         <>
        
//             <div className='container'>
//                 <h2>{props.heading}</h2>
//                 <div className="mb-3">
//                     <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
//                 </div>
//             </div>
//             <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={handleUpClick}>Convert to uppercase</button>
//             <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={handleLowerClick}>Convert to lowercase</button>
//             <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={copyText}> Copy text</button>
//             <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={clearText}>Clear text</button>
//             <button disabled={text.length === 0} className='btn btn-primary mx-3 my-2' onClick={extraSpaceHandler}>Remove extra spaces</button>
//             <hr />
//             <h2>Your text summary</h2>
//             <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length - text.split(" ").length + 1} characters</p>
//             <p>Reading time: {0.8 / 250 * (text.split(/[ ]+/).length - 1)} minutes</p>
//             <h3>Preview</h3>
//             <p>{text.length > 0 ? `${text}` : `${'Nothing to preview!'}`}</p>
           
//         </>
//     )
// }
