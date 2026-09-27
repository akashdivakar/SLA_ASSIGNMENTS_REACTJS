
import {useState} from "react";

function LostFocusInput(){

const[display,setDisplay]=useState("");

const handleBlur =(e)=>{

setDisplay(e.target.value);

}



return(

<>

<input type="text" placeholder="focus Lost" onBlur={handleBlur}/>

<p>{display}</p>

</>
)



}

export default LostFocusInput;

