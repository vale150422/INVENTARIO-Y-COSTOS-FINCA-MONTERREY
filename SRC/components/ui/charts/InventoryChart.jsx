import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function InventoryChart() {

  const data = [
    { name: 'Enero', total: 4000 },
    { name: 'Febrero', total: 3000 }, 
    { name: 'Marzo', total: 5000 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default InventoryChart;