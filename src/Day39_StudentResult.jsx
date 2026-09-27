
import {useState} from "react"
function StudentResult(){
const[mark,setMark]=useState(75);

let result="";

if(mark>90 && mark<100){

result="perfect";

}else if(mark>80 && mark<89){

result="improvement";

}else if(mark>70 && mark<79){

result="average";

}else if(mark>60 && mark<69){

result="fail";

}



return(

<>
<p>{mark}</p>

<p>{result}</p>

<button onClick={()=>setMark(75)}>

{mark==75 ? "hello Active":"Deactive"};

</button>

<button onClick={()=>setMark(80)}>

{mark==80 ? "good Active" :"bad mark"};

</button>


</>

)


}

export default StudentResult;
