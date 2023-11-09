import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './elements/components/PaymentForm/paymentForm';
import PrasaTicket from './elements/components/PrasaTicket/prasaTicket';
// import Homepage from './elements/components/HomePage/homepage';
import {Homepage} from './elements/components/HomePage/homepage'

import { Trips } from './elements/pages/Trips/trips';
import { Stations } from './elements/pages/Stations/stations';
import { CreateStation } from './elements/pages/Temporary Pages/createStation';

// const stripePromise = loadStripe("pk_test_51Nu8BpLjynukjOjO4sSQgdduxOacpiuUaGmSW7YectI7uMIadcveS8J1I3XQTB1edCeORrypAsqqtp4IaRpfPf920054HOFQtQ");

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PaymentForm />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/trips' element={<Trips />} />
        <Route path='/stations' element={<Stations />} />
        <Route path='/account/:id' element={<PaymentForm />} />
        <Route path='/station/create' element={<CreateStation/>} />
        {/* Define other routes if needed */}
      </Routes>
    </div>
  );
}

export default App;
