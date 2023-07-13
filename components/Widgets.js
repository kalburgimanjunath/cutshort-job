export default function Widgets({ children, title, content }) {
  return (
    <div className="bg-white card w-full">
      <div className="font-bold">{title}</div>
      <div>{content}</div>
      {children}
    </div>
  );
}
