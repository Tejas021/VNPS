import React from 'react'

const PoliceForm = () => {
    return (
   
             <div className='container-fluid p-3 border border-info' style={{width:'80%'}}>
        <h2 className='m-2 text-center'>Police Complain</h2>
        <h5 className='' style={{textAlign:'left'}}>Enter the following info:</h5>
         <form className='justify-content-center' >
  <div className="form-row row">
    <div className="form-group col-md-6 m-2">  
      <input type="number" className="form-control" placeholder="" 
          />
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='text'  className="form-control" placeholder="" />
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20'className="form-control" placeholder="" />
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='20' className="form-control" placeholder="" />
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='80' className="form-control"  placeholder=""/>
    </div>
    <div className="form-group col-md-6 m-2">  
      <input type='number' min='0' max='25 'className="form-control"  placeholder="" />
    </div>
 
  </div>
  <div className='text-center'>
  <button type="submit" className="m-3 btn btn-info">Add</button>
  </div>
  
</form>
     </div>
       
    )
}

export default PoliceForm
