import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function BarGraphPage() {
  const data = [
    { name: "Amit", salary: 60000 },
    { name: "Riya", salary: 55000 },
    { name: "Vivek", salary: 50000 },
    { name: "Kiran", salary: 48000 },
  ];

  return (
    <div className="p-10 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-700">Salary Bar Graph</h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="salary" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
