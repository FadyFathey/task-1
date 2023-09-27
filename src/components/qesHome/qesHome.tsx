import React from "react";
import "./qesHome.css";
import { FiMenu } from "react-icons/fi";
import home from '../assets/1.png'
import task from '../assets/2.png'
import upload from '../assets/upload.png'
const QesHome = () => {
  return (
    <div className="questions">
      <div className="side-bar">
        <FiMenu className="first-ic"/>
        <img src={task} alt="task" />
        <img src={home} alt="home" />
        <div className="logo">NT</div>
      </div>
      <div className="body">
        <div className="first-sec">
            <span>Program Details</span>
        </div>
        <div className="sec-sec">
            <span>Application Form</span>
        </div>
        <div className="first-sec">
            <span>Workflow</span>
        </div>
        <div className="b-line"></div>
        <div className="first-sec last">
            <span>Preview</span>
        </div>
        
      </div>

      <div className="upload-img">
        <div className="img-header">
            <span>Upload cover image</span>
        </div>
        <div className="dotted-box">
            <div className="dot-content">
                <img src={upload} alt="upload" />
                <span className="up-text">Upload cover image</span>
                <span className="up-details" >16:9 ratio is recommended. Max image size 1mb</span>
            </div>
        </div>
    </div>
        <div className="personal-inf">
        <div className="img-header modify">
            <span>Personal Information</span>
            <div className="first-name">
                <span>First Name</span>
            </div>
            <div className="line"></div>
        </div>
        
        </div>
    </div>
  );
};

export default QesHome;
