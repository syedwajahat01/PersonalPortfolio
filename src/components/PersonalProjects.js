import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
export const PersonalProjects = () => {
  return (
    <div className=" homepage col-12">
      <div className='row margin0rem'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className=" heading text-center">My Projects</div>
          <div className="ms-5 mt-4 education">
            <h3 className="subheading">E-Commerce webApp</h3>
            <ul className='txt-deco'>
              <li >
                <ArrowRightRoundedIcon /> <a className='txt-deco blink_me' style={{marginLeft:'1px'}} href='https://github.com/syedwajahat01/FullStack-Ecommerce-WebApp' target='_blank' rel="noopener noreferrer">
                  click here </a>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> Developed FullStack E-Commerce webApp which allows people to buy
                  goods with proper user Authentication.
                </span>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> It supports all the basic CRUD operations for the webApp.
                </span>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> Developed frontend using ReactJs and developed Backend using
                  ExpressJs, DataBase using MongoDB.
                </span>
              </li>
              <li>
                <span><ArrowRightRoundedIcon /> Used Stripe as a payment method.</span>
              </li>
            </ul>
          </div>

          <div className="ms-5 mt-4 education">
            <h3 className="subheading">Chatting App</h3>
            <ul className='txt-deco'>
              <li>
                <ArrowRightRoundedIcon /> <a className='txt-deco blink_me' style={{marginLeft:'1px'}} href='https://github.com/syedwajahat01/Chatting-App' target='_blank' rel="noopener noreferrer">
                  click here </a>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> Developed Chatting App which uses real time database (Firebase).
                </span>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> Developed frontend using Reactjs & Integrate google user Authentication.
                </span>
              </li>
              <li>
                <span>
                  <ArrowRightRoundedIcon /> User can chat by making group or one to one.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
