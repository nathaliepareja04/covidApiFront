import React from 'react'

export const DataBoxes = ({numberWithCommas,stats}) => {
  return (
    <div className="row">
    {/*box 1*/}
    <div className="col-md-4 ">
      <div className="card text-center p-5" style={{backgroundColor:"#d7e3fc"}}>
        <h3 className="fw-bold mb-4" style={{color:"#1e3a8a"}}>Cases</h3>
        <div className="mb-4 fs-4">
          <span className="fw-bold">New:</span>
          {numberWithCommas(stats.NewConfirmed)}
        </div>
        <div className="mb-4 fs-4">
          <span className="fw-bold">Total:</span>
          {numberWithCommas(stats.TotalConfirmed)}
        </div>
      </div>
    </div>
    {/*box 2*/}
    <div className="col-md-4">
      <div className="card text-center p-5" style={{backgroundColor:"#c1d3fe"}}>
        <h3 className="fw-bold mb-4" style={{color:"#1e3a8a"}}>Deaths</h3>
        <div className="mb-4 fs-4">
          <span className="fw-bold">New:</span>
          {numberWithCommas(stats.NewDeaths)}
        </div>
        <div className="mb-4 fs-4">
          <span className="fw-bold">Total:</span>
          {numberWithCommas(stats.TotalDeaths)}
        </div>
      </div>
    </div>
    {/*box 3*/}
    <div className="col-md-4">
      <div className="card text-center p-5" style={{backgroundColor:"#d7e3fc"}}>
        <h3 className="fw-bold mb-4" style={{color:"#1e3a8a"}}>Recovered</h3>
        <div className="mb-4 fs-4">
          <span className="fw-bold">New:</span>
          {numberWithCommas(stats.NewRecovered)}
        </div>
        <div className="mb-4 fs-4">
          <span className="fw-bold">Total:</span>
          {numberWithCommas(stats.TotalRecovered)}
        </div>
      </div>
    </div>
  </div>
)
}
