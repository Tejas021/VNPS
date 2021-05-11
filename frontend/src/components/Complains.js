import React from 'react'

const Complains = ({complains,type}) => {
let text;
let color1;
if (type==='fire'){
    color1='warning';
    text='Your Fire Emergencies:'
}
else if(type==='medical'){
    color1='danger';
    text='Your Medical Emergencies:'
}
else{
    color1='info';
    text='Your Police Complains:'
}

    return (
<div className='my-5 container-fluid'>

<div className='row'>
      
       <h3 style={{textAlign:'left'}}>{text}</h3>
       {
       (!complains)?  'Loading':
       
       complains.map(complain=>(
       <div key={complain.id}className={` m-2 border border-${color1} col-md-3 col-sm-6 col-xs-12`}>
        <h6>date:{complain.date}</h6>
        <h3>{complain.complain}</h3>
        </div>))
    }
       
        </div>
</div>


        
    )
}

export default Complains
