const messageBtn = document.getElementById('messageBtn');
const followBtn = document.getElementById('followBtn');

messageBtn.addEventListener('click', function () {
  // Check if chatbox already exists
  if (!document.getElementById('chatBox')) {
    // Create chatbox
    const chatBox = document.createElement('div');
    chatBox.id = 'chatBox';
    chatBox.className = 'chatbox';
    chatBox.innerHTML = `
      <textarea id="chatArea" placeholder="Type your message..."></textarea>
      <button id="sendMessageBtn">Send</button>
      <button id="closeChatBtn">Close</button>
    `;
    document.body.appendChild(chatBox);

    // Add event to close button
    document.getElementById('closeChatBtn').addEventListener('click', function () {
      chatBox.remove();
    });

    // Optional: Handle Send button
    document.getElementById('sendMessageBtn').addEventListener('click', function () {
      const message = document.getElementById('chatArea').value;
      alert("Message sent: " + message); // Replace with actual message handling
    });
  }
});

followBtn.addEventListener('click', function () {
  alert("You are following R Varun Naidu");
});
