import UserProfile from "@/components/Profile/UserProfile";

function About() {
  const userInfo = {
    id: "123",
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <div>
      About
      <UserProfile userInfo={userInfo}></UserProfile>
    </div>
  );
}

export default About;
