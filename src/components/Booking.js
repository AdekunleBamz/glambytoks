import React, { useState, useEffect } from 'react';
import './Booking.css';
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Generate time slots from 9 AM to 7 PM
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 19; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  // Fetch booked slots from backend
  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/bookings');
        const data = await response.json();
        setBookedSlots(data);
      } catch (error) {
        console.error('Error fetching booked slots:', error);
      }
    };

    fetchBookedSlots();
  }, []);

  // Update available time slots when date is selected
  useEffect(() => {
    if (selectedDate) {
      const allSlots = generateTimeSlots();
      const bookedSlotsForDate = bookedSlots
        .filter(slot => slot.date === selectedDate)
        .map(slot => slot.time);
      
      const availableSlots = allSlots.filter(slot => !bookedSlotsForDate.includes(slot));
      setAvailableTimeSlots(availableSlots);
      setSelectedTime(''); // Reset selected time when date changes
    }
  }, [selectedDate, bookedSlots]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          name,
          phone,
          email,
        }),
      });

      if (response.ok) {
        setMessage('Booking successful! We will contact you shortly to confirm.');
        // Reset form
        setSelectedDate('');
        setSelectedTime('');
        setName('');
        setPhone('');
        setEmail('');
        // Refresh booked slots
        const updatedBookings = await response.json();
        setBookedSlots(updatedBookings);
      } else {
        setMessage('Sorry, this slot is no longer available. Please select another time.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-content">
        <h1>Book Your Session</h1>
        <p className="booking-tagline">Select your preferred date and time for your beauty session</p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="date">
              <FaCalendarAlt /> Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          {selectedDate && (
            <div className="form-group">
              <label htmlFor="time">
                <FaClock /> Select Time
              </label>
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">Choose a time slot</option>
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">
              <FaUser /> Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <FaPhone /> Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Booking...' : 'Book Now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking; 