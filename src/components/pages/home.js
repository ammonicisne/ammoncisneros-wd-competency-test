import React from 'react';

import NikolaHome from "../../images/NikolaHome.jpg"

export default function() {
    return (
        <div className="homePage">
            <a href="https://nikolamotor.com/one">
                <div className="newsBox"> 
                    <img src = {NikolaHome} />
                </div>
            </a>
                <div className="emptyBox">
                    NIKOLA NEWS
                </div>
                <div className="homeNewsBox">
                    STAY UP TO DATE WITH ALL NEWS NIKOLA
                    <div className="homeNewsSubBox">
                        The most innovative vehicles entering the market
                    </div>
                </div>
                <div className="homeFooter">
                    CREATED BY AMMON CISNEROS
                </div>

        </div>
    );}