import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './components/paymentForm';

const stripePromise = loadStripe("pk_test_51Nu8BpLjynukjOjO4sSQgdduxOacpiuUaGmSW7YectI7uMIadcveS8J1I3XQTB1edCeORrypAsqqtp4IaRpfPf920054HOFQtQ");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Elements stripe={stripePromise}><PaymentForm /></Elements>} />
        {/* Define other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
