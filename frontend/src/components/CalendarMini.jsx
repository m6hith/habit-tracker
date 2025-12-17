import "./CalendarMini.css";

const CalendarMini = () => {
  const days = Array.from({ length: 7 });

  return (
    <div className="card calendar">
      <h3>This Week</h3>
      <div className="days">
        {days.map((_, i) => (
          <span key={i} className="day active" />
        ))}
      </div>
    </div>
  );
};

export default CalendarMini;
