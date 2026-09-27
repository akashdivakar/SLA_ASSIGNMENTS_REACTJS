import {useState} from "react";

function ClickDoubleClick(){

const [input,setInput]=useState("");
const [display,setDisplay]=useState("");
const [submit,setSubmit]=useState("setclick");

const handleclick=()=>{



setDisplay(input);

setSubmit("single click");

}

const handledoubleclick=()=>{

setDisplay(input);

setSubmit("Double click");
}



return(
<>


<input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

<button  onClick={handleclick} onDoubleClick={ handledoubleclick}>

{submit}
<p>{display}</p>


</button>



</>

)


}

export default ClickDoubleClick;