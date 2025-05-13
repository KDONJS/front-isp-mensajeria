import styled from "styled-components";
import { Smile, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // Instala esta librería con `npm install emoji-picker-react`

export function ChatInput() {
  const [message, setMessage] = useState(""); // Estado para el mensaje
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Estado para mostrar/ocultar el selector de emojis
  const [files, setFiles] = useState([]); // Estado para los archivos adjuntos

  // Maneja la selección de emojis
  const onEmojiClick = (event, emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji); // Agrega el emoji al mensaje
    setShowEmojiPicker(false); // Oculta el selector de emojis
  };

  // Maneja la selección de archivos
  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convierte los archivos en un array
    setFiles((prev) => [...prev, ...selectedFiles]); // Agrega los archivos al estado
  };

  // Maneja el envío del mensaje
  const handleSend = () => {
    console.log("Mensaje enviado:", message);
    console.log("Archivos adjuntos:", files);
    setMessage(""); // Limpia el mensaje
    setFiles([]); // Limpia los archivos
  };

  return (
    <Container>
      <div className="emoji-container">
        <Smile onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
        {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
      </div>
      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <label htmlFor="file-input">
        <Paperclip />
      </label>
      <input
        id="file-input"
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Send onClick={handleSend} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.bg2};
  border-radius: 8px;

  .emoji-container {
    position: relative;
    svg {
      cursor: pointer;
    }
  }

  input[type="text"] {
    flex: 1;
    padding: 8px;
    border: 1px solid ${(props) => props.theme.gray400};
    border-radius: 4px;
    outline: none;
  }

  input[type="file"] {
    display: none;
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.text};
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }

  .emoji-picker-react {
    position: absolute;
    top: -350px;
    left: 0;
    z-index: 10;
  }
`;