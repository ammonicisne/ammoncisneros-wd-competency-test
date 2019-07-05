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
                            <div className="postIcon">
                                <a href="posts">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </a>
                            </div>
                            <div className="postHomeDesc">
                                post stuff
                            </div>
                        </div>
                        <div className="loginHome">
                            <div className="loginIcon">
                                <a href="login">
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </a>
                            </div>
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