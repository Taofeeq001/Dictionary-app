import React, { useState } from "react"
// import open from '../images/icon-hamburger.svg'
// import close from '../images/icon-close.svg'
import '../Components/Header.css'

const Header =()=>{
    // const [toggle, setToggle] = useState(false)
    // const handleSubmit=()=>{
    //     setToggle(!toggle)
    // }
    return(
        <div className="family">
            <marquee behavior="moving" direction="right">Solution to all Programming terms with precise examples</marquee>
            <div className="dictionary">
                <div className="topLeft">
                    <h1>Dictionary Project</h1>
                    <p>A crowdsourced Dictionary for all programming terms</p>
                    <p>Learn more about coding term - <span>See all or random</span></p>
                </div>
                <div className={"topRight"}>
                    <button>Sign up</button>
                    <a href="">Log in</a>
                </div>
                
            </div>
          
        </div>
    )
}
export default Header;