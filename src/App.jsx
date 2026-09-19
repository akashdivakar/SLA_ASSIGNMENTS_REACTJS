import Student from "./Day37_Student";
import Product from "./Day37_Product";
import Nested from "./Day37_Nested";
import ProfileCard from "./Day38_ProfileCard";
import Button from "./Day38_Button";
import Card from "./Day39_Card";
import StudentResult from "./Day39_StudentResult";
import ProductAvailability from "./Day39_ProductAvailability";
import SubmitInput from "./Day40_SubmitInput";
import ClickDoubleClick from "./Day40_ClickDoubleClick";
import PassValueEvent from "./Day40_PassValueEvent";
import MultipleEvents from "./Day40_MultipleEvents";
import LostFocusInput from "./Day40_LostFocusInput";
import EmployeeDetails from "./Day41_EmployeeDetails";
import ProductStateObject from "./Day41_ProductStateObject";
import CustomerList from "./Day41_CustomerList";
import GreetingOnLoad from "./Day42_GreetingOnLoad";
import DocumentTitleCount from "./Day42_DocumentTitleCount";
import TimerFiveSeconds from "./Day42_TimerFiveSeconds";
import FetchUsers from "./Day42_FetchUsers";
import InputEffect from "./Day42_InputEffect";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Day43_Navbar";
import Home from "./pages/Day43_Home";
import Products from "./pages/Day43_Products";
import Reports from "./pages/Day43_Reports";
import About from "./pages/Day43_About";
import Contact from "./pages/Day43_Contact";
import TailwindProfileCard from "./Day44_TailwindProfileCard";
import TailwindNavbar from "./Day44_TailwindNavbar";
import TailwindProductPage from "./Day44_TailwindProductPage";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
     
      <h1>Project 1: Basic Components</h1>

      <h2>Task 1: Student Details</h2>
      <Student />
      <hr />

      <h2>Task 2: Product Details</h2>
      <Product />
      <hr />

      <h2>Task 3: Nested Components</h2>
      <Nested />

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

      
      <h1>Project 2: Components & Props (Day 38)</h1>

      <h2>Task 1: Profile Cards</h2>
      <ProfileCard name="John" age={25} role="Developer">
        <p>Likes React and JavaScript.</p>
      </ProfileCard>

      <ProfileCard name="Sarah" age={28} role="UI/UX Designer">
        <p>Passionate about Figma and user interfaces.</p>
      </ProfileCard>

      <ProfileCard name="Akash" age={22} role="Full Stack Developer">
        <p>Enjoys building MERN stack applications.</p>
      </ProfileCard>
      <hr />

      <h2>Task 2: Reusable Buttons</h2>
      <Button color="blue" size="large">
        Submit
      </Button>
      <Button color="green" size="medium">
        Save
      </Button>
      <Button color="red" size="small">
        Delete
      </Button>

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

  
      <h1>Project 3: Prop Children (Day 39)</h1>

      <h2>Task 1: Reusable Card Component</h2>
      <Card title="Product" footer="₹999">
        <p>This is a great product.</p>
      </Card>

      <Card title="About Us" footer="Established 2024">
        <p>We are dedicated to building modern and responsive web applications.</p>
      </Card>

      <Card title="Contact" footer="contact@example.com">
        <p>Have questions? Feel free to reach out to our team anytime.</p>
      </Card>
      <hr />

      <h2>Task 2: Student Result (Conditional Rendering)</h2>
      <StudentResult />
      <hr />

      <h2>Task 3: Product Availability (&& Operator)</h2>
      <ProductAvailability />

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

    
      <h1>Project 4: React Event Handling (Day 40)</h1>

      <h2>Task 1: Display Input on Submit Button Click</h2>
      <SubmitInput />
      <hr />

      <h2>Task 2: Display Input on Click / Double Click</h2>
      <ClickDoubleClick />
      <hr />

      <h2>Task 3: Passing a Value to an Event</h2>
      <PassValueEvent />
      <hr />

      <h2>Task 4: Handle Multiple Events</h2>
      <MultipleEvents />
      <hr />

      <h2>Task 5: Display Input on Lost Focus (onBlur)</h2>
      <LostFocusInput />

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

  
      <h1>Project 5: React State Management (Day 41)</h1>

      <h2>Task 1: Multiple State Variables (Employee Details)</h2>
      <EmployeeDetails />
      <hr />

      <h2>Task 2: State Object (Product Information)</h2>
      <ProductStateObject />
      <hr />

      <h2>Task 3: State with Array (Add & Delete Customer)</h2>
      <CustomerList />

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

    
      <h1>Project 6: React useEffect Hook (Day 42)</h1>

      <h2>Task 1: Greeting Message on Load (One Time)</h2>
      <GreetingOnLoad />
      <hr />

      <h2>Task 2: Update Document Title on Count Change</h2>
      <DocumentTitleCount />
      <hr />

      <h2>Task 3: Timer (Increases Every 5 Seconds)</h2>
      <TimerFiveSeconds />
      <hr />

      <h2>Task 4: Fetch User Details from API on Load</h2>
      <FetchUsers />
      <hr />

      <h2>Task 5: useEffect on Input Change</h2>
      <InputEffect />

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

     
      <h1>Project 7: React Router DOM (Day 43)</h1>

      <h2>Task 1 & 2: Reusable Navbar & 5 Page Routes</h2>
      <Navbar />

      <div style={{ padding: "10px", border: "1px dashed black" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <br />
      <hr style={{ border: "2px solid #000" }} />
      <br />

 
      <h1>Project 8: React Tailwind CSS (Day 44)</h1>

      <h2>Task 1: Profile Card (Tailwind CSS)</h2>
      <TailwindProfileCard />
      <hr />

      <h2>Task 2: Responsive Navbar (Tailwind CSS)</h2>
      <TailwindNavbar />
      <hr />

      <h2>Task 3: Product Page with 6 Cards (Tailwind CSS)</h2>
      <TailwindProductPage />
    </div>
  );
}

export default App;