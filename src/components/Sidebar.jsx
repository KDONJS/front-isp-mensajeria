import styled from "styled-components";
import logo from "../assets/react.svg";
import { variables } from "../styles/variables";
import { AiOutlineLeft } from "react-icons/ai";
export function Sidebar({sidebarOpen, setSidebarOpen}) {
    const ModSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <Container isOpen = {sidebarOpen}>
            <button className="sidebarButton"
                onClick={ModSidebarOpen}>
                <AiOutlineLeft/>
            </button>
            <div className="LogoContent">
                <div className="imgContent">
                    <img src={logo}/>
                </div>
                <h2>TeslaNet</h2>
            </div>
        </Container>
    );
}
const Container = styled.div`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    position: sticky;
    padding-top: 20px;
    .sidebarButton{
        position: absolute;
        top: ${variables.xxlSpacing};
        right: -18px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        transform: ${({isOpen}) => (isOpen ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
            font-size: inherit;
            text-align: inherit;
            padding: 0;
            font-family: inherit;
            ouytline: none;
    }
    .LogoContent {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${variables.lgSpacing};
        .imgContent{
            display: flex;
            img {
                max-width: 100%;
                height: auto;;
            }
            cursor: pointer;
            transition: all 0.3s;
            transform: ${({isOpen}) => (isOpen ? `scale(0.7)` : `scale(1.5)`)};
        }
        h2 {
            display: ${({isOpen}) => (isOpen ? `block` : `none`)};
        }
    }

`;