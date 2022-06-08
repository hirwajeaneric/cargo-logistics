import React from 'react'
import Dashboard from "../views/dashboard"

const Employer = () => {
  return (
    <Dashboard>
     <div className="card pd-20 pd-sm-40" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
        <h6 className="card-body-title">All employers</h6>
        <p className="mg-b-20 mg-sm-b-30">Here is the list of all employers in yourr company </p>
        <div className="table-responsive">
    <table className="table mg-b-0">
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>Second nme</th>
          <th>Employer Id</th>
          <th>Telephone</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>47573273839983</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>47573273839983</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Ashton Cox</td>
          <td>Junior Technical Author</td>
          <td>47573273839983</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Cedric Kelly</td>
          <td>Senior Javascript Developer</td>
          <td>47573273839983</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Airi Satou</td>
          <td>Accountant</td>
          <td>47573273839983</td>
          <td>0786643907</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>{/* card */}

      </Dashboard>
    
  )
}

export default Employer