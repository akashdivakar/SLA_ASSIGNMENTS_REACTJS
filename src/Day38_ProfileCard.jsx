// Assignment: Project 2 (Components & Props - Day 38) - Task 1: Profile Cards
function Profilecard({name,age,role,children}){

return(

<>

<div style={{border:"2px solid black",padding:"10px",margin:"auto",borderRadius:"5px"}}>

<p>hello bro {name}</p>

<h1> because of my {age}</h1>

<p> my role is {role}</p>

{children}

</div>
</>

)
}

export default Profilecard
