import styled from "styled-components";
import logo from "../assets/logo_tesla.svg";
import { variables } from "../styles/variables";
import { ChevronLeft, House, Send, LayoutDashboard, Users, ClipboardList, Settings, LogOut } from 'lucide-react';
import { NavLink} from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
export function Sidebar({sidebarOpen, setSidebarOpen}) {
    const ModSidebarOpen = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const {setTheme, theme} = useContext(ThemeContext);
    const cambiarTheme = () => {
        setTheme((theme) => (theme === "Light" ? "Dark" : "Light"));
        }
    return (
        <Container $isOpen = {sidebarOpen} $themeUse={theme}>
            <button className="sidebarButton"
                onClick={ModSidebarOpen}>
                <ChevronLeft />
            </button>
            <div className="LogoContent">
                <div className="imgContent">
                    <img src={logo}/>
                </div>
            </div>
            {linksArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`: ``}`}>
                        <div className="LinkIcon">
                            {icon}
                        </div>
                        {sidebarOpen &&(
                            <span className="labelMenu">{label}</span>
                        )
                    }
                    </NavLink>
                </div>
            ))}
            <Divider/>
            {secondarylinksArray.map(({icon, label, to}) => (
                <div className="LinkContainer" key={label}>
                    <NavLink to={to} className={({isActive}) => `Links${isActive ? ` active`: ``}`}>
                        <div className="LinkIcon">
                            {icon}
                        </div>
                        {sidebarOpen &&(
                            <span>{label}</span>
                        )
                    }
                    </NavLink>
                </div>
            ))}
            <Divider/>
            <div className="ThemeContent">
                {sidebarOpen && <span className="titletheme">Dark mode</span>}
                <div className="Tooglecontent">
                    <div className="grid theme-container">
                        <div className="content">
                            <div className="demo">
                                <label className="switch">
                                    <input type="checkbox" className="theme-swither"
                                        onChange={cambiarTheme}>
                                    </input>
                                    <span className="slider round">
                                    </span>
                                </label>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

//#region data Links
const linksArray = [
{
    label: "Home",
    icon: <House/>,
    to: "/",
},
{
    label: "Mensajes",
    icon: <Send/>,
    to: "/mensajes",
},
{
    label: "Dashboard",
    icon: <LayoutDashboard/>,
    to: "/dashboard",
},
{
    label: "Usuarios",
    icon: <Users/>,
    to: "/usuarios",
},
{
    label: "Tareas",
    icon: <ClipboardList/>,
    to: "/tareas",
},

];
const secondarylinksArray = [
{
    label: "Configuracion",
    icon: <Settings />,
    to: "/configuracion",
},
{
    label: "Salir",
    icon: <LogOut />,
    to: "/logout",
},
];
//#endregion
//#region styled components
const Container = styled.div`
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.bg};
    position: sticky;
    padding-top: 30px;
    
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
        transform: ${({$isOpen}) => ($isOpen ? `initial` : `rotate(180deg)`)};
        border: none;
        letter-spacing: inherit;
        color: inherit;
            font-size: inherit;
            text-align: inherit;
            padding: 0;
            font-family: inherit;
            outline: none;
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
                height: auto;
            }
            cursor: pointer;
            transition: all 0.3s;
            transform: ${({$isOpen}) => ($isOpen ? `scale(1.5)` : `scale(0.9)`)};
        }
    }   
    .LinkContainer {
        margin: 8px 0;
        padding: 0;
        :hover {
            background: ${(props) => props.theme.bg3};
        }
        .Links {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${variables.smSpacing} - 2px) 0;
            color: ${(props) => props.theme.text};
            .LinkIcon{
                padding: ${variables.smSpacing} ${variables.mdSpacing};
                display: flex;
                .svg{
                    font-size: 25px;
                    }
            }
            &.active {
                 color: ${(props) => props.theme.bg4};
                .LinkIcon{
                    svg{
                        color: ${(props) => props.theme.bg4};
                    }
                .labelMenu{
                        color: ${(props) => props.theme.bg4};
                    }
                }
            }   
        }
    }
    .ThemeContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        bottom: 20px; 
        left: 0;
        width: 100%; 
        padding: 0 20px
        .titletheme{
            display: block;
            padding: 10px;
            font-weight: 700;
            opacity: ${({$isOpen}) => ($isOpen ? `1` : `0`)};
            transition: all 0.3s;
            white-space: nowrap;
            overflow: hidden;
        }
        .Tooglecontent{
            margin: ${({$isOpen}) => ($isOpen ? `auto 40px` : `auto 15px`)};
            width: 36px;
            height: 20px;
            border-radius: 10px;
            transition: all 0.3s;
            position: relative;
            .theme-container {
                background-blend-mode: multiply, multiply;
                transition: all 0.4s;
                .grid {
                    display: grid;
                    justify-items: center;
                    align-content: center;
                    height: 100hv;
                    width: 100hv;
                    font-family: "Lato", sans-serif;
                }
                .demo{
                    font-size: 32px;
                    .switch{
                        position: relative;
                        display: inline-block;
                        width: 60px;
                        height: 34px; 
                        .theme-swither{
                            opacity: 0;
                            width: 0;
                            height: 0;
                            &:checked + .slider:before{
                                left: 4px;
                                content: "🌑";
                                transform: translatex(26px);
                            }
                        }
                        .slider {
                            position: absolute;
                            cursor: pointer;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: ${({$themeUse}) => ($themeUse === "Light" ? variables.lightcheckbox : variables.darkcheckbox)};
                            transition: 0.4s;
                            &::before{
                                position: absolute;
                                content: "☀️";
                                height: 0px;
                                width: 0px;
                                left: -10px;
                                top: 16px;
                                line-height: 0px;
                                transition: 0.4s;
                            }
                            &.round{
                                border-radius: 34px;
                                &:before{
                                    border-radius: 50%;
                                }
                            } 
                        }
                    }
                }
                
            }
            
        }
    } 
`;
const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg3};
    margin: ${variables.lgSpacing} 0;
`;
//#endregion
