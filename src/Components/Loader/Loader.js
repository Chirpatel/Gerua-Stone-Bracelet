import React from 'react'

import './Loader.css'

function Loader() {
    return (
        <div className="loader">
            <div>
                <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                    <text textAnchor="start" x="-60" y="55" className="text text-stroke">L
                        <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.1"/>
                    </text>
                    <text textAnchor="start" x="-30" y="55" className="text text-stroke">o
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.2"/>  
                    </text>
                    <text textAnchor="start" x="-7" y="55" className="text text-stroke">a
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.3"/>
                    </text>
                    <text textAnchor="start" x="15" y="55" className="text text-stroke">d
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.4"/>
                    </text>
                    <text textAnchor="start" x="40" y="55" className="text text-stroke" >i
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.5"/>
                    </text>
                    <text textAnchor="start" x="55" y="55" className="text text-stroke" >n
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.6"/>
                    </text>
                    <text textAnchor="start" x="75" y="55" className="text text-stroke" >g
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.7"/>
                    </text>
                    <circle fill="#000" stroke="none" cx="105" cy="50" r="6">
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.8"/>
                    </circle>
                    <circle fill="#000" stroke="none" cx="125" cy="50" r="6">
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="0.9"/>      
                    </circle>
                    <circle fill="#000" stroke="none" cx="145" cy="50" r="6">
                    <animateTransform 
                            attributeName="transform" 
                            dur="1s" 
                            type="translate" 
                            values="0 15 ; 0 -15; 0 15" 
                            repeatCount="indefinite" 
                            begin="1"/>   
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export default Loader
