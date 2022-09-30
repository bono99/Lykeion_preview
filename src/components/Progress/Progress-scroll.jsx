import React, { useEffect, useState } from "react";
import  "../../components/Progress/Progress-scroll.css";


const ScrollIndicator = () => {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    
    }

    useEffect((s) => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, []);
   
    return (
        <div>  
            <div className="progressMainWrapper">
                <div 
                    className="progressMainStyle"
                    style={{ width: `${scrollTop}%`}}
                ></div>
                <p></p>
            </div>
        </div>
    )
}

export default ScrollIndicator;