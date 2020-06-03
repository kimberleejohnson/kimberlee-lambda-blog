export default function startCall() {
  let room = { url: "https://kimberlee.daily.co/hello" }

  if (typeof window !== 'undefined') {
    let callFrame = window.DailyIframe.createFrame(document.getElementById('callFrameDiv'),{ 
      iframeStyle:{
        margin: '0', 
        padding: '0',
        border: 'none',  
        width: '100%',
        height: '100%',
        // position: 'fixed'
      }
    });
    // console.log(callFrame);
    // document.getElementById('callFrameDiv').appendChild(callFrame.iframe); 
  
    callFrame.join({
      url: room.url,
      showLeaveButton: true,
    })
  }
}
