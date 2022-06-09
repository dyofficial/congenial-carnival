import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

const Navigation = ({ register }) => {
  console.log(register);
  const navLinks = [
    "USA BANK + INFO",
    "USA BANK (Logpass)",
    "Other",
    "CreditCards(SALE!)",
    "Logs from botnet",
    "CreditCards",
    "Lookup SSN/DOB",
  ];
  const profileLinks = ["Balance: $0", "Menu"];

  return (
    <div>
      <div className="home">
        <div className="home-container">
          <div className="left-nav">
            <div className="content">
              {register ? (
                <Link to="/home">
                  <IoIosHome color="white" size="30px" />
                </Link>
              ) : (
                <Link to="/">
                  <IoIosHome color="white" size="30px" />
                </Link>
              )}
            </div>
            {register ? (
              <div className="nav-links">
                <ul>
                  {navLinks.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
          {register ? (
            <div className="profile-links">
              <ul>
                <li>Balance: 0$</li>
                <li className="menu">Menu</li>
                <FaShoppingCart color="white" />
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
