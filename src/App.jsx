import FriendList from "./FriendList";
import FriendForm from "./FriendForm";
import BillForm from "./BillForm";
import Button from "./Button";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FriendForm />
        <Button> Add Friend</Button>
      </div>
      <BillForm />
    </div>
  );
}
