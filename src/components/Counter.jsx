import React, {useState} from 'react'

function Counter(){

const [number, setnumber]= useState(0);
const increase =()=>{setnumber(number+1);
}
const decrease =()=>{ if(number>0){setnumber(number-1)}}
const reset = ()=>{setnumber(0)}

return(
   <div className='container'>
   <p>Counter: {number}</p>
<button onClick={increase}>Increament</button>
<button onClick={reset}>Reset</button>
<button onClick={decrease}>Decreament</button>
</div>);
}

export default Counter