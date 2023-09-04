import React from "react";
import ClientSlider from "./ClientSlider";
import { CLIENT_STUFF } from "../../constants";

const ClientFeedback = () => {
  return (
    <section id="client-feedback">
      <div className="client-f-all">
        <div className="client-f-text">
          <h1> {CLIENT_STUFF.title}</h1>
          <p>{CLIENT_STUFF.titleP}</p>
        </div>
        <ClientSlider />
      </div>
    </section>
  );
};

export default ClientFeedback;
