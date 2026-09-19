



// function App() {

import Student from "./Student";



// function showMessage() {

// alert("Button clicked!");

// }

// function showStudent(name) {

// alert("Student Name: " + name);

// }

// function Change(event) {

// console.log(event.target.value);

// }

// function handleSubmit(event) {

// event.preventDefault();

// alert("Form submitted");

// }

// function handleClick() {

// console.log("Button clicked");

// }

// function handleMouseEnter() {

// console.log("Mouse entered");

// }

// function handleChange(event) {

// console.log(event.target.value);

// }


// // -----------

// function handleClick() {

// console.log("Button clicked");

// }

// function handleMouseEnter() {

// console.log("Mouse entered");

// }

// function handleMouseLeave() {

// console.log("Mouse Leave");

// }

// function handleChange(event) {

// console.log(event.target.value);

// }

// function handleDblClick() {

// console.log("Button Double clicked");

// }

// function handleKeyDown() {

// console.log("Keyboard key pressed");

// }

// function handleKeyUp() {

// console.log("Keyboard key released");

// }

// function handleFocus() {

// console.log(" Input gets focus");

// }

// function handleBlur() {

// console.log("Input loses focus");

// }

// return (
//   <>

// <div>

// <h2>React Event Example</h2>

// <button onClick={showMessage}>

// Click Me

// </button>

// </div>

// <button onClick={() => alert("Hello React!")}>

// Click Me

// </button>

// <div>

// <button onClick={() => showStudent("Arun")}>

// Student

// </button>

// </div>

// <div>

// <input type="text" onChange={Change}

// />

// </div>

// <form onSubmit={handleSubmit}>

// <input type="text" />

// <button type="submit"> Submit </button>

// </form>

// <div>

// <button onClick={handleClick} onMouseEnter={handleMouseEnter}>

// Click Me </button>

// <br /><br />

// <input type="text" onChange={handleChange} />

// </div>

// <div>

// <h2>Multiple Events Example 6</h2>

// <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

// onDoubleClick={handleDblClick}

// onFocus={handleFocus} onBlur={handleBlur}

// >

// Click Me

// </button>
//  <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}/>
// <br /><br />

// <input type="text" onChange={handleChange} />

// </div>

// return(
//   <>

//   </>
// )





// }

// export default App

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// import Dem from "./pages/Demo";
// import Hom from "./pages/Home";

function App() {
  return (
    // <BrowserRouter>

    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">Demo</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Hom />} />
    //     <Route path="/about" element={<Dem />} />
    //   </Routes>

    // </BrowserRouter>

    <Student/>
  );
}

export default App;