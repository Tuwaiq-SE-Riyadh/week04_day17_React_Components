import logoImg from './logoImg.jpg'
import './Header.css';
//C:\Users\SARAH\Desktop\week4\week04_day17_React_Components\lab2\src\logoImg.jpg
function Header(){
    return(
<div>
    <header>
    <img src={logoImg} className="header-logo" alt="logo" />
        <h1 className="headerPragraph">
         Welcome to my Blog
        </h1>
    </header>
</div>
    )
}
export default Header;