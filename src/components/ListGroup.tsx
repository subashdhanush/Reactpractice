import { Fragment, useState } from "react";
import { MouseEvent } from "react";

function ListGroup(){
   
   let items=[

    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
   ]  

const [selectedIndex,setSelectedIndex] =useState(-1);
//    arr[0]
//    arr[1]
  
   const handleClick=(event:MouseEvent)=>console.log(event)
//    items=[];

//    if (items.length === 0)
//       return <p>No item Found</p>

    const message= items.length === 0 ? <p>No item Found</p> : null

   
    return(
    <Fragment>
     <h1>List</h1>
     {message}
     <ul className="list-group">
         {items.map((item,index)=>
         <li 
          key={item} className={selectedIndex === index 
           ? 'list-group-item active' :'list-group-item'
           }  
           onClick={()=>{setSelectedIndex(index) ;}}>{item}</li>)}
     {/* <li className="list-group-item">An item</li>
     <li className="list-group-item">A second item</li>
     <li className="list-group-item">A third item</li>
     <li className="list-group-item">A fourth item</li>
     <li className="list-group-item">And a fifth one</li> */}
     </ul>
    </Fragment>
    )
}


export default ListGroup;