import React from 'react'

const AddCategory = () => {
  return (
    <div className="col-md-11 grid-margin stretch-card">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Default form</h4>
      <p className="card-description">
        Basic form layout
      </p>
      <form className="forms-sample">
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Username</label>
          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button className="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddCategory