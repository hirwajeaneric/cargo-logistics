import React from 'react'
import Dashboard from "../views/dashboard";

const Customer = () => {
  return (
      <Dashboard>
       <div className="card pd-20 pd-sm-40" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
        <h6 className="card-body-title">All customers</h6>
        <p className="mg-b-20 mg-sm-b-30">This is the list of all customers in yourr company  who signed up to your pltform</p>
        <div className="table-responsive">
    <table className="table mg-b-0">
      <thead>
        <tr>
          
          <th>Full Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Telephone</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          
          <td>Tiger Nixon</td>
          <td>mujoselyne@gmail.com</td>
          <td>muragijejose23</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Garrett Winters</td>
          <td>mujoselyne@gmail.com</td>
          <td>muragijejose23</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Ashton Cox</td>
          <td>mujoselyne@gmail.com</td>
          <td>muragijejose23</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Cedric Kelly</td>
          <td>mujoselyne@gmail.com</td>
          <td>muragijejose23</td>
          <td>0786643907</td>
        </tr>
        <tr>
          
          <td>Airi Satou</td>
          <td>mujoselyne@gmail.com</td>
          <td>muragijejose23</td>
          <td>0786643907</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</div>{/* card */}
      </Dashboard>
    
  )
}

export default Customer