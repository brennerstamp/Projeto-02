import './Header.css';
import logo1 from './imagens/logo1.png';
import logo2 from './imagens/logo2.png';





function Header(props) {
    return (
        <div className="container">
		<div>
            <div className="logo-1">
                <img src= {logo1} />
                </div>
        </div>
		<div>
            <div className="logo-2">
                <img src={logo2} />
                </div>
        </div>
		<div className="clear"></div>
	</div>

    );
}

export default Header;