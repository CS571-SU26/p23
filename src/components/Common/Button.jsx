export default function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={`btn btn-${variant} w-100`} {...props}>
      {children}
    </button>
  );
}