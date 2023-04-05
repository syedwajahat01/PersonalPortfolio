import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

export const ProfessionalProjects = () => {
  return (
    <div className=" homepage">
      <div className="heading text-center">Work Experience</div>
      <div className="ms-5 mt-4 education">
        <h3 className="subheading">
          Criterion Tech.
          <span className="criterionyear">
            09/2022 - Present
          </span>
        </h3>
        <h6 className="subheading">Project: HIS (Hospital Information System)</h6>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Developed Register And Assessment
              Modules.
            </span>
          </li>
          <li>
            <span>
              <ArrowRightRoundedIcon /> Designed a service that sends user data automatically via email.
            </span>
          </li>
          <li>
            <ArrowRightRoundedIcon /> Developed service inventory order feature.
          </li>
          <li>
            <span>
              <ArrowRightRoundedIcon /> Developed investigtaion report feature
              to analyse death and survival ratio based on data.
            </span>
          </li>

          <li>
            <span>
              <ArrowRightRoundedIcon />Technologies are Frontend : HTML5, CSS,
              Bootstrap5 & AngularJS, Backend: dot.net & C#, DataBase: MS SQL
              server.
            </span>
          </li>
        </ul>
      </div>

      <div className="ms-5 mt-4 education">
        <h3 className="subheading">
          Tata Consultancy Services(TCS)
          <span className="tcsyear">
            04/2021 - 08/2022
          </span>
        </h3>
        <h6 className="subheading">Project: Client-Dupont (U.S)</h6>
        <ul className="txt-deco">
          <li>
            <span>
              <ArrowRightRoundedIcon /> Member of project Development Team and
              is responsible for Development.
            </span>
          </li>
          <li>
            <span>
              <ArrowRightRoundedIcon /> Maintenance/Enhancement and Production
              support.
            </span>
          </li>
          <li>
            <span>
              <ArrowRightRoundedIcon /> Created Catalog forms and UI Policies &
              Translations Catalog forms.
            </span>
          </li>
          <li>
            <span>
              <ArrowRightRoundedIcon /> Server discovery in ITOM module.
              Technology: ServiceNow
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
