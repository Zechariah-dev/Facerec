import React, {Component} from 'react';


export class CameraFeed extends Component {
  processDevices(devices) {
    devices.forEach(device => {
      console.log(device.label);
      this.setDevices(device);
    })
  }

  async setDevices(device) {
    const {deviceId} = device;
    const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: {deviceId}});
    this.videoPlayer.srcObject = stream;
    await this.videoPlayer.play();
  }

  async componentDidMount() {
    const cameras = await navigator.mediaDevices.enumerateDevices();
    this.processDevices(cameras);
  }

  takePhoto = () => {
    const { sendFile } = this.props;
    const context = this.canvas.getContext('2d');
    context.drawImage(this.videoPlayer, 0, 0, 680, 360);
    this.canvas.toBlob(sendFile);
  }

  render() {
    return (
      <div>
        <div>
          <video ref={ref => (this.videoPlayer = ref)} width="680" height="360"/>
        </div>
        <button onClick={this.takePhoto}>Take Photo!</button>
        <div>
          <canvas width="680" height="360" ref={ref => (this.canvas = ref)} />
        </div>
      </div>
    )
  }
}
