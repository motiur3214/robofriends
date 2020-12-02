import React from 'react';

const Card=({name,id,email})=>{

return(
<div className=' tc bg-light-green dib br3 ma2 grow bw2 shadow-5' style={{width:'210px', outerHeight:'150px'}}>

<img src={`https://robohash.org/${id}?200x200`} alt='Nothing' /> 

<div>
<h2>{name}</h2>
<p>{email}</p>

</div>
</div>
);
}
export default Card;