import React from 'react';

 function HomePage(){
     return (
     <div className={"jumbotron"}>
         <h1>Pluralsight Admin</h1>
         <p>React</p>
         <a href={"/about"}> About</a>
     </div>
     );
 }

 export default HomePage;