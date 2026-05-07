import { LayoutDashboard, Package } from 'lucide-react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Agro System</h2>

      <ul>
        <li>
          <LayoutDashboard size={18} /> Dashboard
        </li>

        <li>
          <Package size={18} /> Inventario
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;