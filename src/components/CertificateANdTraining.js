import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
export const CertificateANdTraining = () => {
  return (
    <div className="homepage">
      <div className="heading text-center">Certificate & Achievement</div>
      <div className="ms-5 mt-4 education">
        <h5 className="subheading">Web Development Certificate.</h5>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Learnt and Developed projects using
              HTML5, CSS, Java Script, ReactJs, NodeJs, ExpressJs, MongoDB
            </span>
          </li>
        </ul>
      </div>

      <div className="ms-5 mt-4 education">
        <h5 className="subheading">Training</h5>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Done Training of Data Scientist at Digipodium.
            </span>
          </li>
        </ul>
      </div>
      <div className="ms-5 mt-4 education">
        <h5 className="subheading">Certification</h5>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Done certification in master class of Data Science by Innomatics Research Labs.
            </span>
          </li>
        </ul>
      </div>
      <div className="ms-5 mt-4 education">
        <h5 className="subheading">Cheif coordinator of IT Quiz</h5>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Organize and well executed IT Quiz - The Enigma at Campus Level.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
