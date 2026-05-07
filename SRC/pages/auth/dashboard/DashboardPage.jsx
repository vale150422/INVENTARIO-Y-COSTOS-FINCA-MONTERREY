import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCards from '../../components/cards/DashboardCards';
import InventoryChart from '../../components/charts/InventoryChart';

function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardCards />
      <InventoryChart />
    </DashboardLayout>
  );
}

export default DashboardPage;