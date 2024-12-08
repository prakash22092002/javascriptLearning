import React, { useState } from "react";

/**
 * The App component serves as the parent component.
 * It manages the state to toggle between View and Edit modes.
 */
function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [nameVal , setNameVal] = useState("johndoe")
  const [emailVal , setEmailVal ] = useState("johndoe11@gmail.com")
  // User data to be passed as props
  const userData = { name: nameVal, email: emailVal, bio: "Web Developer" };

  return (
    <div>
      <button onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "View Profile" : "Edit Profile"}
      </button>
      {isEditMode ? (
        <EditProfile user={userData} nameVal />
      ) : (
        <UserProfile user={userData} />
      )}
    </div>
  );
}

/**
 * UserProfile component renders the user's information in View Mode.
 */
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

/**
 * EditProfile component provides input fields to edit the user's details.
 * The fields are pre-populated with existing data using defaultValue.
 */
function EditProfile({ user }) {

  return (
    <form>
      <input type="text" defaultValue={user.name} />
      <input type="email" defaultValue={user.email} />
      <textarea defaultValue={user.bio}></textarea>
    </form>
  );
}

export default App;

