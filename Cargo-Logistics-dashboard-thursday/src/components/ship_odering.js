import React from 'react'
import Dashboard2 from '../views/dashboard2'
const Odering = () => {
  return (
    <Dashboard2> 
        <div className="am-pagebody" style={{marginLeft:"230px", marginTop:"100px",marginRight:"50px"}}>
  <div className="card pd-20 pd-sm-40">
    <h6 className="card-body-title">Add new shipment</h6>
    <p className="mg-b-20 mg-sm-b-30"> Connect people with their pproducts with effective means of transport.</p>
    <div className="form-layout">
      <div className="row mg-b-25">
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Customer names: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="firstname"  placeholder=" customer names" />
          </div>
        </div>{/* col-4 */}
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Email address: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="email"  placeholder=" email address" />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Name of product: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  placeholder=" product/Cargo" />
          </div>
        </div>{/* col-4 */}
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Origin: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  placeholder=" origin" />
          </div>
        </div>{/* col-4 */}

        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}> Destination: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="lastname"  placeholder=" Destination" />
          </div>
        </div>{/* col-4 */}
        {/* <div className="col-lg-8"> */}
        
        
        
        <div className="col-lg-4">
          <div className="form-group">
            <label className="form-control-label" style={{color:"black"}}>Expected delivery: <span className="tx-danger">*</span></label>
            <input className="form-control" type="date" name="date"  placeholder="Enter expected delivery date" />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="form-group mg-b-10-force">
            <label className="form-control-label" style={{color:"black"}}> Desciptions: <span className="tx-danger">*</span></label>
            <input className="form-control" type="text" name="address"  placeholder="Enter address" />
          </div>
          </div>
        </div>{/* col-8 */}

      <div className="form-layout-footer">
        <button className="btn btn-info mg-r-5">Submit </button>
        <button className="btn btn-secondary">Cancel</button>
      </div>{/* form-layout-footer */}
    </div>{/* form-layout */}
  </div>{/* card */}
  </div>


    </Dashboard2>
  )
}

export default Odering