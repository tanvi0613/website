import './landing.css';
import phone from '../img/phone.png';
import logo from '../img/logo.png'; // Import the logo image

function App() {
  return (
    <div className="Landing">
      <div className="main">
        <div className="left">
          <img src={logo} id="logo" alt="logo" />
          <p className="heading">Track your<br />expenses</p>
          <p className="tagline">Effortlessly manage your finances and stay on top of your expenses.</p>
          <div className="btns">
            <button id="bottone5">Login</button>
            <button id="bottone5">Signup</button>
          </div>
        </div>
        <div className="side">
          <h3>
            <a href="www.google.com">Connect With Us</a>
          </h3>
          <img src={phone} alt="phone" />
        </div>
      </div>
      <footer>
        <div className="marquee">
          <div className="footer-content">
            Save your time . Transform your ordinary finance into digital one . Share money across the whole family .
            Tracking expenses has never been so encouraging . Save your time . Transform your ordinary finance into digital one .
            Share money across the whole family . Tracking expenses has never been so encouraging . Save your time . Transform your ordinary finance into digital one .
            Share money across the whole family . Tracking expenses has never been so encouraging
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
