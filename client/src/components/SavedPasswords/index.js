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
      <button>Add</button>
    </div>
  );
}

export default SavedPasswords;