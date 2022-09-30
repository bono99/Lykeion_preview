import React, { useState, useRef, useEffect } from 'react'
import "./Accordian.css";

let Accordian = (props) => {

    const [active, setActive] = useState(false)
    const contentRef = useRef(null)
  
    useEffect(() => {
      contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])
  
    const toogleActive = () => {
      setActive(!active)
    }
  
    const titleStyle = {
      fontWeight: 600,
      fontSize: '14px',
      textAlign: 'center',
    }
  
    return (
        <div className="accordianSection">
            <div className="accordianTitle" onClick={toogleActive}> 
                <p style={titleStyle}>{props.title}</p>   
            </div>
            <div
                ref={contentRef}
                className="accordionContent"
            >
                {props.children}
            </div>
        </div>
    )
}

export default Accordian;