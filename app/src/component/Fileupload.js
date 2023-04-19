import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAlert } from 'react-alert';
import { useState, useEffect } from 'react';

class Fileupload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    const notify = "Done";
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName);
    data.append('drumsonly', this.drumsonly.checked);
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: data,
    });
    //.then(response => response.json())
    //.then(data);
    //const data = response;
        //this.setState(this.response.data);
        //console.log(response);
    //});
  }

  render() {
    return (

      <div className='contact-container bg-grey'>
      <span className="div-title">Step 2: Upload your song (.wav)</span>
      <form onSubmit={this.handleUploadImage}>
          <div className='contact-form'>
            <div id='sect2'>
                <button className="contact-btn">
                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
                </button>
                <br></br>
                <span>
                <div className="div-title-small">My song only has Drums. No guitar, no vocals... &nbsp;&nbsp;<input ref={(ref) => { this.drumsonly = ref; }} type="checkbox"/></div>
                </span>
            </div>
            <div id='sect2'>
              <button className="contact-btn">Transcribe this song</button>
              <span>&nbsp;</span>
              <br></br>
            </div>
          </div>
      </form>
      </div>
    );
  }
}

export default Fileupload;