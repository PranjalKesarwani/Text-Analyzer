

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>   {/*Agr aap anchor tag and href use kroge toh page reload ho jaega, so na hi kro toh better hai */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                            </li>

                        </ul>
                        

                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                        <label className={`"form-check-label text-${props.mode === 'dark' ? 'light':'dark'}`} htmlFor="flexSwitchCheckChecked">Enable {props.mode === 'dark'? 'light':'dark'} mode</label>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'set about text'
}








// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


// export default function Navbar(props) {
//     return (
//         <div>
//             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">{props.title}</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>   {/*Agr aap anchor tag and href use kroge toh page reload ho jaega, so na hi kro toh better hai */}
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link active" to="/about">{props.aboutText}</Link>
//                             </li>

//                         </ul>
//                         <div className="d-flex">
//                             <div onClick={()=>{props.toggleMode('primary')}} className="bg-primary rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('secondary')}} className="bg-secondary rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('success')}} className="bg-success rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('warning')}} className="bg-warning rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('danger')}} className="bg-danger rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('info')}} className="bg-info rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('light')}} className="bg-light rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                             <div onClick={()=>{props.toggleMode('dark')}} className="bg-dark rounded mx-2" style={{ height: '21px', width: '21px', backgroundColor: 'red', cursor:'pointer' }}></div> {/* onClick ko ek fxn chahiye hota hai na ki ek fxn call means aap*/}
//                         </div>

//                     </div>    
//                     <div className="form-check form-switch mx-3">
//                         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={()=>{props.toggleMode(null)}} />
//                         <label className={`"form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckChecked">Toggle mode</label>
//                     </div>    
//                 </div>    
//             </nav>    
//         </div>        
//     )
// }    

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }    

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'set about text'
// }    


















