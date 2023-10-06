/* eslint-disable react/prop-types */
import './BuyButton.css'

function BuyButtonComponent({buyButtonId, pubKey}) {
  // Paste the stripe-buy-button snippet in your React component
  return (
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={pubKey}
      >
      </stripe-buy-button>
    );
}

export default BuyButtonComponent;