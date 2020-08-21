import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_51HIOKvBPrOCucvB0W0VwCxNTVDsiY7Knu7TI6vAbPIxHiZGmqPXywvNgVbwaDZxHEJ3vYlwWYGz8wr2zx9FLlvIL00DJbWorEf';

    const OnToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
          label='Pay Now'
          name='fashion Clothing Ltd.'
          billingAddress
          shippingAddress
          image='https://svgshare.com/i/CUz.svg'
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel='Pay Now'
          token={onToken}
          stripeKey={publishableKey}
        />
    );
}

export default StripeCheckout;
