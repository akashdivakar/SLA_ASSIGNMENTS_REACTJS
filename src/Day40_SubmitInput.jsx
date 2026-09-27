import {useState} from "react"

function Submitinput(){

const [input,setInput]=useState("");

const [display,setDisplay]=useState("");

const [issubmit,setSubmit]=useState(false);



const handleSubmit=(e)=>{

e.preventDefault();
setDisplay(input);
setSubmit(true);

}

return(

<>

<form onSubmit={handleSubmit}>

<input type="text" value={input} onChange={(e)=>{setInput(e.target.value) ;setSubmit(false)}} />

<button type="submit">

{issubmit ?    "submit!":"submit"}

</button>

</form>

<p>the output {display}</p>


</>

)

}

export default Submitinput;
