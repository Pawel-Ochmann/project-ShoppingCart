import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
    <button><Link to="/">Go back to main page</Link></button>
    </div>
  );
};

export default Profile;
