// SeatMap.js
import React, { useState } from 'react';
import './SeatMap.css'; // Import the CSS file for styling

const Seat = ({ seatId, price, isBooked, onSeatClick }) => {
  const seatStyle = {
    backgroundColor: isBooked ? '#D3D3D3' : getPriceColor(price),
    cursor: isBooked ? 'not-allowed' : 'pointer',
    // border: isBooked ? '2px solid #A9A9A9' : 'none',
    // Add other styling properties as needed
  };

  const handleClick = () => {
    if (!isBooked) {
      onSeatClick(seatId);
    }
  };

  return (
    <div className={`seat ${isBooked ? 'booked' : 'available'}`} style={seatStyle} onClick={handleClick}>
      {isBooked && <span className="cross-icon">X</span>}
      {/* Price is not visible */}
    </div>
  );
};

const getPriceColor = (price) => {
  // Map prices to colors based on your requirements
  if (price === 0) return '#FFFFFF'; // Default color for free seats
  if (price <= 200) return '#6ACFA2'; // Green for ₹0-200
  if (price <= 250) return '#FFFF00'; // Yellow for ₹201-250
  if (price <= 300) return '#FFA500'; // Orange for ₹251-300
  if (price <= 350) return '#FF4500'; // Red for ₹301-350
  if (price <= 400) return '#8B0000'; // Dark Red for ₹351-400
  if (price <= 1400) return '#4B0082'; // Indigo for ₹401-1400
  return '#D3D3D3'; // Default color for unknown prices
};

const SeatRow = ({ rowId, seatsInRow, bookedSeats, prices, onSeatClick }) => {
  return (
    <div className="seat-row">
      <div className="row-label">{rowId}</div>
      {seatsInRow.map((seatNumber, index) => (
        <Seat
          key={seatNumber}
          seatId={seatNumber}
          price={prices[index]}
          isBooked={bookedSeats.includes(seatNumber)}
          onSeatClick={onSeatClick}
        />
      ))}
    </div>
  );
};

const ColumnLabels = ({ totalColumns }) => {
  return (
    <div className="column-labels">
      <div className="empty-label" />
      {Array.from({ length: totalColumns }, (_, index) => (
        <div className="column-label" key={index}>
          {index + 1}
        </div>
      ))}
    </div>
  );
};

const SeatMap = () => {
  const [bookedSeats, setBookedSeats] = useState([1, 2, 3, 4, 15, 16, 17, 18,99,185]); // Example: Booked seats
  const totalRows = 6;
  const totalColumns = 31;
  const prices = [0, 200, 250, 300, 350, 400, 1400]; // Example prices

  const handleSeatClick = (seatId) => {
    // Logic to handle seat click (e.g., book the seat)
    // Update the bookedSeats state accordingly
    setBookedSeats([...bookedSeats, seatId]);
  };

  const rows = [];
  for (let row = totalRows - 1; row >= 0; row--) {
    const rowId = String.fromCharCode(65 + row); // ASCII code for 'A' is 65
    const rowSeats = Array.from({ length: totalColumns }, (_, index) => row * totalColumns + index + 1);
    rows.push({ rowId, rowSeats });
  }

  return (
    <div className="seat-map">
      <h2>Flight Seat Booking</h2>
      {rows.map((rowData) => (
        <SeatRow
          key={rowData.rowId}
          rowId={rowData.rowId}
          seatsInRow={rowData.rowSeats}
          bookedSeats={bookedSeats}
          prices={prices.slice(1, prices.length)} // Exclude the first price (0)
          onSeatClick={handleSeatClick}
        />
      ))}
      <ColumnLabels totalColumns={totalColumns} />
    </div>
  );
};

export default SeatMap;
