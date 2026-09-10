import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: 'user', text: input };
  setMessages((prev) => [...prev, userMessage]);
  setInput('');

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage.text }),
    });

    const data = await response.json();

    const botMessage = { sender: 'bot', text: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message :', error);
  }
};

  return (
    <div>
      {<p>Bienvenue dans le chat !</p>}
      <div>
    {messages.map((msg, index) => (

        <p key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>

            <strong>{msg.sender === 'user' ? 'Vous' : 'Bot'} :</strong> {msg.text}
        </p> ))}
</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tapez votre message..."
      />
      <button onClick={sendMessage}>Envoyer</button>
    </div>
  );
}

export default Chat;