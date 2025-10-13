import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ListPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: "Amit Sharma", email: "amit@example.com", department: "IT", salary: 60000, city: "Delhi" },
        { id: 2, name: "Riya Singh", email: "riya@example.com", department: "HR", salary: 55000, city: "Mumbai" },
        { id: 3, name: "Vivek Rana", email: "vivek@example.com", department: "Finance", salary: 50000, city: "Pune" },
        { id: 4, name: "Kiran Patel", email: "kiran@example.com", department: "Sales", salary: 48000, city: "Jaipur" },
      ];
      setData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600 text-xl">Loading data...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
        Employee List
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Department</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-indigo-50 transition">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.department}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => navigate("/details", { state: { item } })}
                    className="bg-indigo-600 text-white px-4 py-1 rounded-lg hover:bg-indigo-700"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
