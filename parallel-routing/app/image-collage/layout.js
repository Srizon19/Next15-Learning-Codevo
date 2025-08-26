export default function Layout({ children, modal }) {
  return <div className="p-4">
        {children}
        {modal}
    </div>;
}