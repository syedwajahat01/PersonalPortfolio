import "../css/main.css";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Button } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { About } from "./About";
import { Education } from "./Education";
import { PersonalProjects } from "./PersonalProjects";
import { ProfessionalProjects } from "./ProfessionalProjects";
import { CertificateANdTraining } from "./CertificateANdTraining";
import { Contact } from "./Contact";
export const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="row home " style={{display:'flex'}}>
          <div className="col-6 mt-5 txt">
            <h1 className="mainHeading ">
              Hi, I'm
              <span className="name ">Wajahat</span>
            </h1>
            <p className="context txtanimation ">
              I Develop <br /> Interactive User Interfaces & WebApps
            </p>

            <div className="mt-4">
              <a
                className="btn-resume "
                href="SyedWajahatHusainAbdiRESUME.pdf"
                download="SyedWajahatHusainAbdiRESUME.pdf"
              >
                <Button id="downloadBtn" value="download">
                  <DownloadRoundedIcon />
                  Resume
                </Button>
              </a>
            </div>

            
          

          <div className="homeSocialIcon">
            <a
              className="icondeco me-2"
              href="https://www.instagram.com/theonlywajahat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <span>
                <InstagramIcon />
              </span>
            </a>
            <a
              className="icondeco me-2"
              href="https://www.linkedin.com/in/syed-wajahat-husain-abdi-365259202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              
              <span>
                <LinkedInIcon />
              </span>
            </a>
            <a
              className="icondeco"
              href="https://github.com/syedwajahat01/"
              target="_blank"
              rel="noopener noreferrer"
            >
             
              <span>
                <GitHubIcon />
              </span>
            </a>
          </div>

          </div>

          <div className="col-6 mt-5 img">
          <img  src="personCoding.png"/> 

          </div>
        </div>
      </div>

      <About />
      <Education />
      <PersonalProjects />
      <ProfessionalProjects />
      <CertificateANdTraining />
      <Contact />
    </>
  );
};
