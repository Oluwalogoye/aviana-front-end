import logo from './logo.svg';

import './Header.css';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <a href="#" class="logo">
            <img src={logo} alt="Aviana Logo"/>
          </a>
          <ul>
            <li><a href="#">CASE STUDIES</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
        </nav>
        <div class="bottom-line"></div>
      </header>
    </div>
  );
}

export default Header;
