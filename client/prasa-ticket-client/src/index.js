import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Elements, StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App';

const stripePromise = loadStripe('pk_test_51Nu8BpLjynukjOjO4sSQgdduxOacpiuUaGmSW7YectI7uMIadcveS8J1I3XQTB1edCeORrypAsqqtp4IaRpfPf920054HOFQtQ');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <StripeProvider apiKey="pk_test_51Nu8BpLjynukjOjO4sSQgdduxOacpiuUaGmSW7YectI7uMIadcveS8J1I3XQTB1edCeORrypAsqqtp4IaRpfPf920054HOFQtQ">
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </StripeProvider>
    </React.StrictMode>
  </Router>
);