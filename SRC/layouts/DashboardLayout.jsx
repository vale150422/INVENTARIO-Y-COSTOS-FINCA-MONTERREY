import Sidebar from '../components/ui/Sidebar';
import Navbar from '../components/ui/Navbar';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;