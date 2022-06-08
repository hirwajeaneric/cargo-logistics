import React from 'react'
import Dashboard from "../views/dashboard";

const Allshipment = () => {
  return (
      <Dashboard>
     <div className="card pd-20 pd-sm-40" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
  <h6 className="card-body-title">All shipments</h6>
  <p className="mg-b-20 mg-sm-b-30">List of shipments registered by our customers</p>
  <div className="table-wrapper">
    <table id="datatable1" className="table display responsive nowrap">
      <thead>
        <tr>
          <th className="wd-15p">First name</th>
          <th className="wd-15p">Last name</th>
          <th className="wd-20p">Product Code</th>
          <th className="wd-20p">Quantity (kg)</th>
          <th className="wd-15p">date</th>
          <th className="wd-10p">Orgin</th>
          <th className="wd-10p">Destination</th>
          <th className="wd-25p">E-mail</th>
          <th className="wd-25p">Description</th>
          <th className="wd-25p">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiger</td>
          <td>Nixon</td>
          <td>BD002</td>
          <td>20</td>
          <td>2011/04/25</td>
          <td>Kenya</td>
          <td>Kamonyi</td>
          <td>t.nixon@datatables.net</td>
          <td>This product is emergency </td>
          <td> <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary pd-x-25 active">Update</button>
  
       </div>
       </td>
        </tr>
        <tr>
          <td>Garrett</td>
          <td>Winters</td>
          <td>Bt002</td>
          <td>20</td>
          <td>2011/07/25</td>
          <td>Kigali</td>
          <td>Rubavu</td>
          <td>g.winters@datatables.net</td>
          <td>This product is emergency </td>
          <td> <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary pd-x-25 active">Update</button>
  
  
       </div>
       </td>
        </tr>
        <tr>
          <td>Ashton</td>
          <td>Cox</td>
          <td>Bf002</td>
          <td>4</td>
          <td>2009/01/12</td>
          <td>Dubai</td>
          <td>Kigali</td>
          <td>a.cox@datatables.net</td>
          <td>This product is emergency </td>
          <td> <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary pd-x-25 active">Update</button>
  
       </div>
       </td>
        </tr>
        <tr>
          <td>Cedric</td>
          <td>Kelly</td>
          <td>Bl042</td>
          <td>20</td>
          <td>2012/03/29</td>
          <td>USA</td>
          <td>Bujumbura</td>
          <td>c.kelly@datatables.net</td>
          <td>This product is emergency </td>
          <td> <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary pd-x-25 active">Update</button>
  
       </div>
       </td>
        </tr>
        <tr>
          <td>Airi</td>
          <td>Satou</td>
          <td>By392</td>
          <td>13</td>
          <td>2008/11/28</td>
          <td>Canada</td>
          <td>Japan</td>
          <td>a.satou@datatables.net</td>
          <td>This product is emergency </td>
          <td> <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary pd-x-25 active">Update</button>
  
       </div>
       </td>
        </tr>
        
        
      </tbody>
    </table>
  </div>{/* table-wrapper */}
</div>{/* card */}

    </Dashboard>
  )

}

export default Allshipment