import React from "react";
import kisses from "../kisses.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={kisses} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Ye hui na baat cutie!
    </p>
    <p className="App-text-success">
      I will be waiting for you, Pooja.
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">31/05/2025</p>
  </div>
);

export default Success;
