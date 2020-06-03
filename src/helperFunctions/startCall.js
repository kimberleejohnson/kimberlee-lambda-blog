export default function startCall() {
  let room = { url: "https://kimberlee.daily.co/hello" }

  if (typeof window !== 'undefined') {
    let callFrame = window.DailyIframe.createFrame({
      iframeStyle:{
        top: '0',
        left: '0', 
        width: '100%',
        height: '100%',
        position: 'fixed'
      }
    });
  
    callFrame.join({
      url: room.url,
      showLeaveButton: true,
    })
  }
}
