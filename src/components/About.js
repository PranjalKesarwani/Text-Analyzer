// import { useState } from "react"
import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({

    //     color: 'black',
    //     backgroundColor: 'white',
    //     padding: '7px 7px',
    //     borderRadius: '9px',
    //     transition: 'all 0.5s ease'
    // })

    let myStyle = {
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor: props.mode ==='dark'? 'rgb(42 28 72)':'white',
        paddingLeft:'12px',
        paddingRight:'12px',
        paddingBottom:'12px',
        borderRadius:'8px'
    }

    // const [btnText, setBtnText] = useState('dark')



    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             padding: '7px 7px',
    //             borderRadius: '9px',
    //             transition: 'all 0.5s ease'

    //         })
    //         setBtnText('dark');

    //     }
    //     else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             padding: '7px 7px',
    //             borderRadius: '9px',
    //             transition: 'all 0.5s ease'

    //         })
    //         setBtnText('light');
    //     }
    // }



    return (
        <div id='container' style={myStyle}>
            
            <h1 className='my-3 mx-2'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time to read the whole text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                             <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Textutils is a free character counter tool that provices instant chracyter count and wod count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                             <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        This word counter software works in any web browsers such as chrome, Firefox, Brave, safari, opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
