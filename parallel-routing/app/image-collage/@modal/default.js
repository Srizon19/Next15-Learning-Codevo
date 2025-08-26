export default function Layout({ children, modal }) {
  return (
    <div className="p-4 relative">
      {/* Main page content */}
      {children}

      {/* Modal (if passed) */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {modal}
          </div>
        </div>
      )}
    </div>
  );
}
