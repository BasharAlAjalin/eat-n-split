import FriendList from "./FriendList";
import FriendForm from "./FriendForm";
import BillForm from "./BillForm";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
      <FriendForm />
      <BillForm />
    </div>
  );
}
