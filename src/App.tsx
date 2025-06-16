import './App.css'
import { useUser } from "./context/useUser";

function App() {
  const userContext = useUser();
  const user = userContext?.user;


  return (
    <div>
      {user ? (
        <div>
          <div>User ID: {user.id}</div>
          <div>Name: {user.firstName} {user.lastName}</div>
          <div>Email: {user.email}</div>
        </div>
      ) : (
        <div>No user found.</div>
      )}
    </div>
  );
}

export default App
