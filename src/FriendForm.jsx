import Button from "./Button";

export default function FriendForm() {
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
