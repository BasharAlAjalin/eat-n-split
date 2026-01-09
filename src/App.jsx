import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Bashar",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sahar",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Aziz",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [select, setSelect] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleDisplayForm() {
    setSelect((select) => !select);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setSelect(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {select && <FriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleDisplayForm}>
          {select ? "Close" : "Add Friend"}
        </Button>
      </div>
      <BillForm />
    </div>
  );
}

function FriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>😎Friend Name: </label>
      <input
        type="text"
        placeholder="Enter Friend name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸Imgage URL: </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button> Add </Button>
    </form>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} €
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function BillForm() {
  return (
    <form className="form-split-bill">
      <h2> Split bill with X </h2>

      <label>💰Bill value: </label>
      <input type="text" />
      <label>🫵 Your expense: </label>
      <input type="text" />
      <label>🧍X expense: </label>
      <input type="text" disabled />
      <label>😜 Who will pay? </label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button> Split Bill </Button>
    </form>
  );
}
