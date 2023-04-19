import React from "react";

export default function DownloadTranscription() {
  return(
        <div className='contact-container bg-grey'>
            <div className="div-title">Step 3: Download your transcription</div>
            <div align="center">
                <button className="contact-btn2">
                    <a href='http://localhost:5000/download'>Download Transcription</a>
                </button>
            </div>
        </div>
    );
}

