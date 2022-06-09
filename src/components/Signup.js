import { Link } from "react-router-dom";
const Signup = ({ setRegister, register }) => {
  const handleSignup = (e) => {
    setRegister(true);
    e.preventDefault();
    console.log("signup");
  };

  return (
    <div>
      <form className="signup-form">
        <div className="top">
          <span className="reg">Registration</span>
        </div>
        <div className="credentials">
          <div className="input-area">
            <span>Email:</span>
            <br />
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-area">
            <span>Email</span>Signup
            <br />
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-area">
            <span>Confirm Password:</span>
            <br />
            <input type="password" placeholder="password" />
          </div>
        </div>
        <div className="captcha">
          <div className="input-area">
            <span>Catcha</span>
            <br />
            <input type="text" placeholder="Captcha" />
          </div>
          <div className="input-area">
            <span>Catcha</span>
            <br />
            <input type="text" placeholder="Captcha" />
          </div>
        </div>
        <div className="buttons">
          <button className="signup-btn">Sign up</button>
          <Link to="/">
            <button className="signup-btn" style={{ background: "#323842" }}>
              Login
            </button>
          </Link>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Signup;
