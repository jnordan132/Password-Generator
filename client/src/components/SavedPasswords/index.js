function SavedPasswords() {
  return (
    <div className="savedPasswords">
      <div className="group">
        <div className="title">
          <input type="text" placeholder="Title" />
        </div>
        <div className="password">
          <input type="text" placeholder="Password" />
        </div>
      </div>
      <div className="add">
        <button className="addBtn">Add</button>
      </div>
    </div>
  );
}

export default SavedPasswords;
