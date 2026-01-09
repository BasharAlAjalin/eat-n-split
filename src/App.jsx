import FriendList from "./FriendList";
import BillForm from "./BillForm";
import Button from "./Button";
import { useState } from "react";

export default function App() {
  const [select, setSelect] = useState(false);
  function handleDisplayForm() {
    setSelect((select) => !select);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {select && <FriendForm />}
        <Button onClick={handleDisplayForm}>
          {select ? "Close" : "Add Friend"}
        </Button>
      </div>
      <BillForm />
    </div>
  );
}

function FriendForm() {
  return (
    <form className="form-add-friend">
      <label>😎Friend Name: </label>
      <input type="text" placeholder="Enter Friend name" />
      <label>📸Imgage URL: </label>
      <input type="text" />
      <Button> Add </Button>
    </form>
  );
}
