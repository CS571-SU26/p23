export default function SavedRollCard({ name, expression }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{name}</h6>
        <p className="card-text small text-muted">{expression}</p>
      </div>
    </div>
  );
}