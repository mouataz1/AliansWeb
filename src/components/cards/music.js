import React, {useState, useEffect} from "react";
import './music.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ReactJkMusicPlayer from "react-jinke-music-player";





function Music() {


    return(
        <div className="container   p-0" >
            <div>
                <div className="wrapper pt-5">
                    <audio src="http://localhost:8055/assets/3ff2b4da-721d-4b3b-9927-46150a2bd08d" id="hidden-player"></audio>
                    <div id="player">
                        <img src="http://static.djbooth.net/pics-features/oddisee-art-thumb.jpg" className="coverr" alt="" height="200" width="200"/>
                        <div className="player-song">
                            <div className="title">title</div>
                            <div className="artist"></div>
                            <progress value="10" max="1"></progress>
                            <div className="timestamps">
                                <div className="time-now">0:00:00</div>
                                <div className="time-finish">0:00:00</div>
                            </div>
                            <div className="actions">
                                <div className="prev">
                                    <i className="material-icons">fast_rewind</i>
                                </div>
                                <div className="play">
                                    <a className="play-button paused" href="#">
                                        <div className="left"></div>
                                        <div className="right"></div>
                                        <div className="triangle-1"></div>
                                        <div className="triangle-2"></div>
                                    </a>
                                </div>
                                <div className="next">
                                    <i className="material-icons">fast_forward</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Music;