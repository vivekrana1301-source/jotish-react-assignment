import { useLocation, useNavigate } from "react-router-dom";

export default function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const item = state?.item;

  if (!item) return <p>No data found</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Employee Details</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p><strong>ID:</strong> {item.id}</p>
        <p><strong>Name:</strong> {item.name}</p>
        <p><strong>Email:</strong> {item.email}</p>
        <p><strong>Department:</strong> {item.department}</p>
        <p><strong>Salary:</strong> ₹{item.salary}</p>
        <p><strong>City:</strong> {item.city}</p>
      </div>
      <div className="mt-6 space-x-4">
        <button onClick={() => navigate("/photo")} className="bg-indigo-600 text-white px-4 py-2 rounded">
          Take Photo
        </button>
        <button onClick={() => navigate("/graph")} className="bg-green-600 text-white px-4 py-2 rounded">
          Bar Graph
        </button>
        <button onClick={() => navigate("/map")} className="bg-blue-600 text-white px-4 py-2 rounded">
          Map
        </button>
      </div>
    </div>
  );
}
