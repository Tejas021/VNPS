import React from 'react'
import {useState} from 'react'
const Block = ({complain,color1}) => {
const [disp, setdisp] = useState(false)
    return (

            <div
                key={complain.id}
                className={`m-2 border border-${color1} col-md-3 col-sm-6 col-xs-12`}
              >
                <h6 >Date:{complain.date}</h6>
                <h3 onClick={e=>setdisp(!disp)}>{complain.title}</h3>
                {/* <button onClick={e=>setdisp(!disp)} className="btn btn-success">press</button> */}
                {disp?
                <h6>{complain.description}</h6>:<></>}
              </div>
      
    )
}

export default Block
