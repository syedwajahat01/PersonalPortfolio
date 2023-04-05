import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


export const About = () => {
  return (
   <>
    <div className="homepage" >
        <div className="p">INTRODUCTION</div>
        <span className="heading ms-4">Overview.</span>
        <p className="p">
          Software Engineer with excellent problem-solving skills and ability to
          perform well in a team.<br/>
          Passionate about coding and enjoy developing
          web apps using modern technologies.
        </p>
        
        <div className="mt-5">
           <h1 className="ms-4" style={{color:'white'}}>Skills</h1>
            <div className=" ms-4" style={{display:'flex'}}>
                <ul className="skillset1 txt-deco">
                    <li><span><ArrowRightRoundedIcon />C++</span></li>   
                    <li><span><ArrowRightRoundedIcon />JavaScript</span></li>
                    <li><span><ArrowRightRoundedIcon />C#</span></li>
                    <li><span><ArrowRightRoundedIcon />Problem Solving</span></li>
                    <li><span><ArrowRightRoundedIcon />Data Structures & Algo.</span></li>
                </ul>

                <ul className="skillset1 txt-deco">
                    <li><span><ArrowRightRoundedIcon />HTML5 & CSS</span></li>
                    <li><span><ArrowRightRoundedIcon />NodeJS</span></li>
                    <li><span><ArrowRightRoundedIcon />ReactJS</span></li>
                    <li><span><ArrowRightRoundedIcon />AngularJS</span></li>
                    <li><span><ArrowRightRoundedIcon />Rest API</span></li>
                </ul>

                <ul className="skillset1 txt-deco">
                    <li><span><ArrowRightRoundedIcon />MS SQL</span></li>
                    <li><span><ArrowRightRoundedIcon />Mongo DB</span></li>
                    <li><span><ArrowRightRoundedIcon />Operating System</span></li>
                    <li><span><ArrowRightRoundedIcon />Computer Network</span></li>
                    <li><span><ArrowRightRoundedIcon />ServiceNow</span></li>
                </ul>
            </div>
        </div>
        </div>
   
        </>
  );        
};
