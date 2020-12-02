import React from 'react';

const Serach= ({searchChange})=>
{
return(
<div className='pa2'>
<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Here' onChange={searchChange} />
</div>

);}
export default Serach;