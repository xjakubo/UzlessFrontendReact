import "../styles/Menu.css"
import gruzLogo from '/gruz.jpg'

function Menu(){
    return(
        <div className="menu-container">
        <a href = "/">
            <img className = "logo" src = {gruzLogo}></img>
        </a>
        <ul className = "menu">
        <a href = "/printer">
        <li> Drukarki </li>
        </a>
        <a href = "/contractor">
        <li> Klienci </li>
        </a>
        <li> Zadania </li>
        </ul>
        </div>
    );
}

export default Menu;