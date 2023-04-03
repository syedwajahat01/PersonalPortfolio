import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
export const Education = () => {
  return (
    <div className='homepage'>
      <div className=' heading text-center'>
      Education <SchoolRoundedIcon />
      </div>
      <div className='ms-5 mt-5 education'>
      <h3 className='subheading'>B.Tech in Computer Science <span className='year'>07/2016 - 07-2020</span></h3>
      <h5> Integral University </h5>
      </div>

      <div className='ms-5 mt-5 education'>
      <h3 className='subheading'>Intermediate <span className='year' style={{marginLeft:'50rem'}}>07/2013 - 07-2015</span></h3>
      <h5> Lucknow Christian Inter College </h5>
      </div>

      <div className='ms-5 mt-5 education'>
      <h3 className='subheading'>High School <span className='year' style={{marginLeft:'50rem'}}>07/2012 - 06-2013</span></h3>
      <h5> Mufed Model Public School </h5>
      </div>
      


    </div>
    
  )
}
