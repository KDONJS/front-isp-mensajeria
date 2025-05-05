import React, {useState } from 'react';
import {MyRoutes} from './routers/routes';
import Styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from "./components/Sidebar";
import {Light, Dark} from "./styles/Themes";
import { ThemeProvider } from 'styled-components';
export const ThemeContext = React.createContext(null);
function App() {
  const [theme, setTheme] = useState("Light");
  const themeStyle = theme === "Light" ? Light : Dark;
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Container className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
             <Sidebar 
                sidebarOpen = {sidebarOpen}
                setSidebarOpen = {setSidebarOpen}
              />
              <MyRoutes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
    </>
  );
}
const Container = Styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme}) => theme.bgtotal};
  transition: all 0.3s;;
  &.active {
    grid-template-columns: 300px auto;
  }  
  color: ${({theme}) => theme.text};
`;
export default App;
