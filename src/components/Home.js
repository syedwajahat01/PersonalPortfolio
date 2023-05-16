/* eslint-disable jsx-a11y/alt-text */
import "../css/main.css";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Button } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { About } from "./About";
// import { Education } from "./Education";
// import { PersonalProjects } from "./PersonalProjects";
// import { ProfessionalProjects } from "./ProfessionalProjects";
// import { CertificateANdTraining } from "./CertificateANdTraining";
// import { Contact } from "./Contact";
export const Home = () => {
  return (
    <>
      
      <div className="col-12 margin0rem homepagee">
        <div className="home row " id="homeMain" style={{display:'flex'}}>

          <div className=" mt-5 txt col-lg-6 col-md-6 col-sm-6 margin0rem">
          <div style={{display: 'flex', marginLeft:'25px'}}>
            <h1 className="mainHeading  marginl" >
              Hi, I'm
            </h1>
            <h1 className="name" > Wajahat</h1>
          </div>
            
            <p className="context txtanimation  marginl mobileContext" >
              I Develop<br />Interactive User Interfaces & WebApps
            </p>

            <div className="mt-4 " style={{marginLeft:'26px'}}>
              <a
                className="btn-resume " 
                href="SyedWajahatHusainAbdiRESUME.pdf"
                download="SyedWajahatHusainAbdiRESUME.pdf" 
              >
                <Button id="downloadBtn"  value="download">
                  <DownloadRoundedIcon />
                  Resume
                </Button>
              </a>
            </div>

            
          

          <div className="homeSocialIcon" >
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

          <div className="mt-5 img col-lg-6 col-md-6 col-sm-6 margin0rem ">
          <img className="setImage" src="personCoding.gif"/> 

          </div>
        </div>
        </div>
      

      
    </>
  );
};
