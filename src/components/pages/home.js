import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

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
                    <div className="homeLinks">
                        <div className="postHome">
                            <a href="posts">
                                <FontAwesomeIcon icon={faNewspaper} />
                            </a>
                            <div className="postHomeDesc">
                                post stuff
                            </div>
                        </div>
                        <div className="loginHome">
                            <a href="login">
                                <FontAwesomeIcon icon={faSignInAlt} />
                            </a>
                            <div className="loginHomeDesc">
                                login stuff
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homeFooter">
                    CREATED BY AMMON CISNEROS
                </div>
        </div>
    );}