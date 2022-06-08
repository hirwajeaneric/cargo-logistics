import React from 'react'
import Dashboard from "../views/dashboard";

const Product = () => {
  return (
      <Dashboard>
     <div className="card pd-20 pd-sm-40" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
        <h6 className="card-body-title">All products</h6>
        <p className="mg-b-20 mg-sm-b-30">This is the list of all products need to be shipped tick all allowed </p>
        <div className="table-responsive">
    <table className="table mg-b-0">
      <thead>
        <tr>
          <th>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Product code</th>
    
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </td>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>320,800</td>
          <td>3fw</td>
        </tr>
        <tr>
          <td>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </td>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>10</td>
          <td>fwf4</td>
        </tr>
        <tr>
          <td>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </td>
          <td>Ashton Cox</td>
          <td>Junior Technical Author</td>
          <td>6</td>
          <td>dehw47</td>
        </tr>
        <tr>
          <td>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </td>
          <td>Cedric Kelly</td>
          <td>Senior Javascript Developer</td>
          <td>3</td>
          <td>ure47</td>
        </tr>
        <tr>
          <td>
            <label className="ckbox mg-b-0">
              <input type="checkbox" /><span />
            </label>
          </td>
          <td>Airi Satou</td>
          <td>Accountant</td>
          <td>49</td>
          <td>834gju</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>{/* card */}

      </Dashboard>
    
  )
}

export default Product