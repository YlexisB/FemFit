import React from "react";
import ClientSlider from "./ClientSlider";

const ClientFeedback = () => {
  return (
    <section id="client-feedback">
      <div className="client-f-all">
        <div className="client-f-text">
          <h1> OUR CLIENTS SAY</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur odio eros. Quis cursus turpis aliquet bibendum. Aenean
            vestibulum magna sit amet tellus consectetur ultricies
          </p>
        </div>
        <ClientSlider />
      </div>
    </section>
  );
};

export default ClientFeedback;
