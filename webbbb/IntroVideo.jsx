import React from "react";
import Video from '../Videos/Michelin.mp4';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function IntroVideo() {
    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden"}}>
            <video autoPlay loop muted style={{ width: "100%", height: "auto", objectFit: "cover"  }}>
                <source src={Video} type="video/mp4" />
            </video>
            <div style={{ position: "absolute", top: "7%", left: "0%", right: "0%", transform: "translate(-50%, -50%)" }}>
                <h1 className="font-weight-bold" style={{ color: "white", fontFamily: "Roboto, sans-serif", textAlign: "center", width: "100%", animation: "moveText 8s linear infinite" }}>
                    <span style={{ fontSize: "1.9rem",fontWeight: "900", fontFamily: "'Arial', sans-serif", fontStyle: "italic" }}>TRUST MICHELIN FOR A BETTER LIFE IN MOTION</span><br />
                </h1>
                </div>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <h1 className="font-weight-bold" style={{ color: "white", fontFamily: "Roboto, sans-serif", textAlign: "center", width: "100%" }}>
                    <span style={{ fontSize: "4rem",fontWeight: "900", fontFamily: "'Arial', sans-serif", fontStyle: "italic" }}>NOW LET'S DIVE INTO</span><br />
                    <span style={{ fontSize: "4rem",fontWeight: "900", fontFamily: "'Arial', sans-serif", fontStyle: "italic" }}>OUR PRESENTATION</span>
                </h1>
                <div className="text-center"> 
                    <Link to="/Topics" className="btn btn-lg rounded-circle" style={{ background: "white", color: "black", marginTop: "20px", fontSize: "2rem" }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
</div>
        
    )
}