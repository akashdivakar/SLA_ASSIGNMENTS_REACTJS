import {useState} from "react"

function Button({color,size,children}){


const [click,setClick]=useState(false);

var padding="18px";
var fontSize="5px";

if(size==="large"){

padding="20px";
fontSize="30px";

}

else if(size==="medium"){

padding="15px";
fontSize="20px";

}

else if(size==="small"){

padding="10px";
fontSize="10px";
}

const buttonstyle={
backgroundColor:click ? "white":color,
padding:padding,
fontSize:fontSize,
border:"none",
borderRadius:"4px",
color:"blue",

}

return (

<button style={buttonstyle} onClick={() =>setClick(!click)}>
{click?`${children} hello`:children}

</button>


)

}


export default Button;


