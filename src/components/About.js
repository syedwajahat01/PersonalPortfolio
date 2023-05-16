import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


export const About = () => {
    return (
        <>
            <div className="col-12 margin0rem homepage" >
                <div className='row margin0rem'>
                    <div className='col-lg-12 col-md-12 col-sm-12 mt-5'>
                        <div className="p">INTRODUCTION</div>
                        <span className="heading ms-4 mt-5">Overview.</span>
                        <p className="p">
                            Software Engineer with excellent problem-solving skills and ability to
                            perform well in a team.<br />
                            Passionate about coding and enjoy developing
                            web apps using modern technologies.
                        </p>
                    </div>

                    <div className="mt-5">
                        <h1 className="ms-4" style={{ color: 'white' }}>Skills</h1>
                        <div className=" ms-4 home" >
                            <div className='col-lg-3 col-md-3 col-sm-3' style={{marginRight:'-25px'}}>
                                <ul className="skillset1 txt-deco">
                                    <li><span className='home'><ArrowRightRoundedIcon />C++</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />JavaScript</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />C#</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />Problem Solving</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />Data Structures & Algo.</span></li>
                                </ul>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-4 ' style={{marginRight:'25px'}}>
                                <ul className="skillset1 txt-deco">
                                    <li><span className='home' ><ArrowRightRoundedIcon />HTML5 & CSS</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />NodeJS</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />ReactJS</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />AngularJS</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />Rest APIs</span></li>
                                </ul>
                            </div>

                            <div className='col-lg-4 col-md-4 col-sm-4 '>
                                <ul className="skillset1 txt-deco">
                                    <li><span className='home'><ArrowRightRoundedIcon />MsSQL</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />MongoDB</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />Operating System</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />Computer Network</span></li>
                                    <li><span className='home'><ArrowRightRoundedIcon />ServiceNow</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
