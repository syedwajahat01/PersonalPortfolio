import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "../css/main.css";
import { Link } from "react-router-dom";


export const SideBar = () => {
  return (
    <div className=" sidebar fixed-top shadow">
      <nav className="navbar navbar-expand-lg sidebar" >
        <div className="container-fluid">
          <span>
            <Link to="/" className="txt-decoration">
              <HomeRoundedIcon />
            </Link>
          </span>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white" />
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="">
                <span className="licolor">
                  <Link
                    to="/about"
                    className="txt-decoration list nav-link active"
                    aria-current="page"
                  >
                  <span className="licolor">About</span>
                    
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span>
                  <Link
                    to="/education"
                    className="txt-decoration list nav-link active"
                    aria-current="page"
                  >
                  <span className="licolor">Education</span>
                    
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span>
                  <Link
                    to="/project"
                    className="txt-decoration list nav-link active"
                    aria-current="page"
                  >
                  <span className="licolor">My Projects</span>
                    
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span>
                  <Link
                    to="/work"
                    className="txt-decoration list nav-link active"
                    aria-current="page"
                  >
                  <span className="licolor">Work Experience</span>
                    
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span>
                  <Link
                    to="/certificate"
                    className="txt-decoration list nav-link active"
                    aria-current="page"
                  >
                  <span className="licolor">Certificate & Achievement</span>
                    
                  </Link>
                </span>
              </li>

              <li className="nav-item">
                <span>
                  <Link
                    to="/contact"
                    className="txt-decoration list nav-link active"
                  >
                  <span className="licolor">Contact us</span>
                    
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
