export default function Panel({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}