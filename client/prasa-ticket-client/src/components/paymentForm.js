import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
    const [trip, setTrip] = useState('');
    const [passenger, setPassenger] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        try {
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (error) {
                console.error(error);
            } else {
                const response = await axios.post('http://localhost:5100/api/process-payment', {
                    amount: 1000,
                    currency: 'usd',
                    paymentMethodId: paymentMethod.id,
                    trip,
                    passenger,
                });

                console.log('Payment successful!', response.data);
                window.location.href = '/success';
            }
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <div className="payment-form">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Trip:
                    <input type="text" value={trip} onChange={(e) => setTrip(e.target.value)} required />
                </label>
                <label>
                    Passenger:
                    <input type="text" value={passenger} onChange={(e) => setPassenger(e.target.value)} required />
                </label>
                <label>
                    Card Details:
                    <CardElement options={{ style: { base: { fontSize: '16px' } } }} required />
                </label>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;
