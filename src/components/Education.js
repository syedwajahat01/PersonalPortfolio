import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
export const Education = () => {
  return (
    <div className='homepage col-12 margin0rem'>
      <div className='row margin0rem'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className=' heading text-center edu'>
            Education <SchoolRoundedIcon />
          </div>
          <div className='ms-5 mt-5 education' >
            <h3 className='subheading'>BTech in (CSE) <span className='year1'>(07/2016 - 07/2020)</span></h3>
            <h5> Integral University </h5>
          </div>

          <div className='ms-5 mt-5 education'>
            <h3 className='subheading'>Intermediate <span className='year2' >(07/2013 - 07/2015)</span></h3>
            <h5> Lucknow Christian Inter College </h5>
          </div>

          <div className='ms-5 mt-5 education'>
            <h3 className='subheading'>High School <span className='year3' >(07/2012 - 06/2013)</span></h3>
            <h5> Mufed Model Public School </h5>
          </div>

        </div>
      </div>
    </div>

  )
}
