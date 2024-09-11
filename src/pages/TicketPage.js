// src/pages/TicketPage.js
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeTicket, updateTicket } from "../slices/ticketSlices";

const TicketPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);
  const { role } = useSelector((state) => state.auth);
  const ticket = tickets.find((ticket) => ticket.id === id);

  const handleCloseTicket = () => {
    dispatch(closeTicket(id));
  };

  const handleUpdateTicket = () => {
    dispatch(updateTicket({ ...ticket, status: "updated" }));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">{ticket.title}</h2>
      <p>{ticket.description}</p>
      <p>Status: {ticket.status}</p>
      <div className="mt-4">
        {role === "tech-support" && (
          <button
            onClick={handleUpdateTicket}
            className="bg-yellow-500 text-white p-2 mr-4"
          >
            Update Ticket
          </button>
        )}
        <button
          onClick={handleCloseTicket}
          className="bg-red-500 text-white p-2"
        >
          Close Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketPage;
