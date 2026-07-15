export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">🎲 Dice Roller</span>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#saved">Saved Rolls</a>
          <a className="nav-link" href="#import">Import</a>
          <a className="nav-link" href="#settings">Settings</a>
          <a className="nav-link" href="#help">Help</a>
        </div>
      </div>
    </nav>
  );
}