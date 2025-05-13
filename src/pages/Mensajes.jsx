import styled from "styled-components";
import {ChatBox} from '../components/ChatBox';
import {ChatInput} from '../components/ChatInput';

export function Mensajes() {
  return (
    <div>
      <ChatBox />
      <ChatInput />
    </div>
  );
}
const Container = styled.div`
     height: 100vh;
`;