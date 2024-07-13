import "./Nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  const orgLogin = () =>{
    navigate("/org");
  }
  return (
    <>
      <div className="nav">
        <div id="logo">Logo</div>
        <div className="name">
          <div className="basename">Fest Name</div>
          <div className="subname">College Name</div>
        </div>
        <div className="pfp" onClick={orgLogin}>
          <svg
            width="60"
            height="56"
            viewBox="0 0 80 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="40" cy="40.5" rx="40" ry="40.5" fill="#D9D9D9" />
            <path
              d="M54 58C54 59.1046 54.8954 60 56 60C57.1046 60 58 59.1046 58 58H54ZM48 46V44V46ZM32 46V44V46ZM24 54H22H24ZM22 58C22 59.1046 22.8954 60 24 60C25.1046 60 26 59.1046 26 58H22ZM58 58V54H54V58H58ZM58 54C58 51.3478 56.9464 48.8043 55.0711 46.9289L52.2426 49.7574C53.3679 50.8826 54 52.4087 54 54H58ZM55.0711 46.9289C53.1957 45.0536 50.6522 44 48 44V48C49.5913 48 51.1174 48.6321 52.2426 49.7574L55.0711 46.9289ZM48 44H32V48H48V44ZM32 44C29.3478 44 26.8043 45.0536 24.9289 46.9289L27.7574 49.7574C28.8826 48.6321 30.4087 48 32 48V44ZM24.9289 46.9289C23.0536 48.8043 22 51.3478 22 54H26C26 52.4087 26.6321 50.8826 27.7574 49.7574L24.9289 46.9289ZM22 54V58H26V54H22ZM46 30C46 33.3137 43.3137 36 40 36V40C45.5228 40 50 35.5228 50 30H46ZM40 36C36.6863 36 34 33.3137 34 30H30C30 35.5228 34.4772 40 40 40V36ZM34 30C34 26.6863 36.6863 24 40 24V20C34.4772 20 30 24.4772 30 30H34ZM40 24C43.3137 24 46 26.6863 46 30H50C50 24.4772 45.5228 20 40 20V24Z"
              fill="#1E1E1E"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
export default Nav;
