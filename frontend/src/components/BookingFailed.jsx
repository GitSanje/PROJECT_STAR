// BookingFailed.jsx or .tsx
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BookingFailed = () => {
  const query = useQuery();
  const errorMessage = query.get('error');

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-red-600">Booking Failed</h2>
      <p className="mt-4 text-gray-700">
        {errorMessage || 'Something went wrong with your booking.'}
      </p>
    </div>
  );
};

export default BookingFailed;
