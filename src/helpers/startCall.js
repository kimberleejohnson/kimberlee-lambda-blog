// Component passed to the video-chat.js page to start a call 
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
      }
    });
  
    callFrame.join({
      url: room.url,
      showLeaveButton: true,
    }) 

    let participantList = document.getElementById('participantList'); 
 
    callFrame.on('participant-joined', (e) => { 
      let participants = callFrame.participants(); 
      let participantHTML = ''; 
      console.log(participants)
      let count = 1; 
;       for(let id in participants) {
        let p = participants[id]; 
        // A count of the number of people on the call 
        participantHTML += `
        <div>
          <li>${p.user_name || `Participant ${count}`}</li>
        </div>
        `;
        count++; 
      }
      participantList.innerHTML = participantHTML; 
    });

    callFrame.on('participant-updated', (e) => {
      console.log("Changes!")
    })
  }
}

export function test() {
  console.log("Test"); 
}
