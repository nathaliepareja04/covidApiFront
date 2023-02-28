import React from 'react'

export const Header = () => {
  return (
    <header className='text-center text-white p-4 mb-5 col-xxl-12' style={{backgroundColor:"#219ebc"}}>
    <div className="fw-bold fs-1">
      <i className="fa-solid fa-virus-covid"></i>  
      Covid-19 Tracker      
    </div>
    <p>
      API BY 
      <a href="https://covid19api.com" target="_blank" rel="noreferre" className='text-white'>{"  "}Covid19api.com<i className="fa fa-viruses"></i></a>
    </p>
  </header>
)
}
