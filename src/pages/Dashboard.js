// src/pages/Dashboard.js
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { tickets } = useSelector((state) => state.tickets);
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleTicketClick = (id) => {
    navigate(`/tickets/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-6">Dashboard - {role}</h2>
      <ul>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            className="border p-4 mb-2 cursor-pointer"
            onClick={() => handleTicketClick(ticket.id)}
          >
            <h3>{ticket.title}</h3>
            <p>Status: {ticket.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
