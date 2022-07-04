import { Link, useNavigate } from "react-router-dom";

const Login = ({ setRegister, handleLogin, register }) => {
  let navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div>
      <div>{/* <Navigation register={register} /> */}</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="left">
          <div className="input-area">
            <span>Email:</span>
            <input type="text" placeholder="Email or login" />
          </div>
          <div className="input-area">
            <span>Email</span>
            <input type="text" placeholder="Email or login" />
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
        <div className="right">
          <div className="input-area">
            <span>Password:</span>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-area">
            <span>Catcha</span>
            <input type="text" placeholder="Captcha" />
          </div>
          <Link to="/signup">
            <button className="signup-btn" style={{ background: "#323842" }}>
              Sign up
            </button>
          </Link>
          <div></div>
        </div>
      </form>
    </div>
  );
};

export default Login;
