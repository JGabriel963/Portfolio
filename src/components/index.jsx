export default function Container({ children }) {
  return (
    <div className="relative font-poppins bg-background box-border select-none">
      {children}
    </div>
  );
}
