import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51K7NKhGHsjR2mYmO0N7SlE5SaMXkn7sNXAwn7bXACYM06bSNcj0npGSl76MkPBDpr7jajllvRCt79SqD4Xwlz4Ut00gXTEFP3e";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "/http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } 
      catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  const onToken = (token) => {
    setStripeToken(token);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
      }}
    >
      <StripeCheckout
        name="Smart Shop"
        image="https://lh3.googleusercontent.com/proxy/snsrcE42wVaIEtFuAWRGeT1Il5pTCixDr59HJbDSfkevaRJPODMFD90DUdqJnLnq9w-1a11JTEcRRDT-l4YQ6Voe3BXm5uTasKyVJ5mufQVsbfUqK-GaRw"
        billingAddress
        shippingAddress
        description="Your total is $50"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
