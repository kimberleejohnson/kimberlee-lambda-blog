// Function to update participants list 
// Will be imported with startCall 
export default function updateParticipants() {
    let participantList = document.getElementById('participantList'), 
    participants = callFrame.participants(); 
    
    participantHTML = ''; 

    for (var id in participants) {
        let p = participants[id]; 
        participantHTML += `
        <li>${p.user_name || 'guest'}</li>
        `
    }
    participantList.innerHTML = `<div><b>Call attendees</b></div>` + `<div>` + participantHTML + `</div>`; 
}