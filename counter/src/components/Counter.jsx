// import React, {useState} from "react";

// const Counter =()=>{
//     // hooks use useState
//     const [count,setCount] =React.useState(0);
//     const incrementCount = ()=>{
//         console.log("pre",count);
//         setCount(count+1);
//         console.log("post",count);
//     };

//     const decrementCount = ()=>{
//         console.log("pre",count);
//         setCount(count-1);
//         console.log("post",count);
//     };


//     return (
//         <div>
//             <h1>Counter App: {count}</h1>
//             <button onClick = {incrementCount}>Increment</button>
//             <button onClick ={decrementCount}>Decrement</button>
//         </div>
//     );
// };

import React, {useState} from "react";
const Counter =()=>{
         // hooks use useState
const [count,setCount] =useState(0);

 return (
         <div>
            <h1>Counter App: {count}</h1>
            <button className="increment" onClick = {()=>setCount(count+1)}>Increment</button>
            <button onClick ={()=> {
               if(count>0) {
               setCount(count-1)
            }

         }}
         >
         Decrement
         </button>
            </div>
         );
};
export default Counter;