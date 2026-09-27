import {useState} from "react";

function CustomerList(){

const [customer,setCustomer]=useState(["akash","divakar","ramesh"]);

const[customername,setCustomername]=useState("");

const[success,setSuccess]=useState("Add data");

function handlechange(){

if(customername.trim() !== ""){

setCustomer([...customer,customername]);
setCustomername("");
setSuccess("Add data successfully"); 

}

}

const handledelete=(indexvalue)=>{
  const update=customer.filter((_,index)=>index !== indexvalue);

  setCustomer(update);
}

return(
<>

<input type="text" value={customername} onChange={(e)=> setCustomername(e.target.value)} />


<button onClick={handlechange} > {success}</button>

{customer.map((customer,index)=>(

<li key={index}>
{customer}

<button onClick={()=> handledelete(index)}>delete</button>
</li>

))}

</>

)

}

export default CustomerList;

