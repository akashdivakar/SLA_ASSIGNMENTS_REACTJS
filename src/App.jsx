import ProfileCard from "./ProfileCard";
import Button from "./Button";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Day 38 React Components & Props Assignment</h1>

      <hr />

      {/* Task 1: ProfileCard Component */}
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

      {/* Task 2: Button Component */}
      <h2>Task 2: Buttons</h2>

      <Button color="blue" size="large">
        Submit
      </Button>

      <Button color="green" size="medium">
        Save
      </Button>

      <Button color="red" size="small">
        Delete
      </Button>
    </div>
  );
}

export default App;