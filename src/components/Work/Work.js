import { useEffect } from 'react';
import React from "react";
import './Work.css'
import { Link } from "react-router-dom";

const Work = () => {
useEffect(() => {
    document.title = 'Work in progress - jkwear';
}, []);

return(
<>
<div className='icon'>
    <Link to={'/'}>
    <i class="fa-solid fa-arrow-left"></i>
    </Link>
</div>
<div className="text-work">
<h1>Work in progress.</h1>
<h2>Please check later or on a different day!</h2>
<h3>Don't just try to refresh it.</h3>
<h4>It doesn't work, we haven't build this page yet...</h4>
</div>
</>
);
}

export default Work;
