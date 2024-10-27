function generateMeetLink() {
    // Generate a random string for meet ID
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let meetId = '';
    
    // First part
    for (let i = 0; i < 3; i++) {
        meetId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    meetId += '-';
    
    // Second part
    for (let i = 0; i < 4; i++) {
        meetId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    meetId += '-';
    
    // Third part
    for (let i = 0; i < 3; i++) {
        meetId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return `https://meet.google.com/${meetId}`;
}
