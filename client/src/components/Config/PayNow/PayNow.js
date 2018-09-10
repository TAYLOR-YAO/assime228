const {
    CardElement,
    StripeProvider,
    Elements,
    injectStripe,
  } = ReactStripeElements
  
  class CardForm extends React.Component {
    render() {
      return (
        <form onSubmit={this.props.userPay}>
          <CardElement onReady={this.props.cardRef} />
          <button>Pay</button>
        </form>
      );
    }
  }
  
  class Checkout extends React.Component {
    userPay = (event) => {
      const testName = "John Doe";
  
      if (this.cardElement) {
        this.props.stripe
          .createToken(
            this.cardElement,
            { name: testName } // add additional information here, such as name and address, if outside card element
          )
          .then(({ token }) => {
            const tokenString = token.id; // you actually want token.id to send to your server and then to the stripe API
            // code to send tokenString to your server, which will then send it to stripe's API
          });
      }
    };
  
    cardRef = (element) => {
      if (element) {
        this.cardElement = element;
      }
    };
  
    render() {
      return (
        <div className="Checkout">
          <h1>Available Elements</h1>
            <CardForm
              cardRef={this.cardRef}
              userPay={this.userPay}
            />
        </div>
      );
    }
  }
  
  const StripeCheckout = injectStripe(Checkout);
  
  const App = () => {
    return (
      <StripeProvider apiKey="pk_RXwtgk4Z5VR82S94vtwmam6P8qMXQ">
          <Elements>
            <StripeCheckout />
          </Elements>
      </StripeProvider>
    );
  };