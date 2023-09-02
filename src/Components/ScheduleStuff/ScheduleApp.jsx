import React, { useState } from "react";
import Modal from "../Modal";

const ScheduleApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="schedule-app">
      <div className="schedule-text-ab">
        <div className="schedule-text-a">
          <h1> SCHEDULE & EVENTS</h1>
          <p>
            We are open 7 days a week! You get your own accesss code, your
            freedom to work out anytime!
          </p>
        </div>
        <div className="schedule-text-a schedule-text-b">
          <p>
            Our managers can help you to select the best classes according to
            your needs and expectations.
          </p>
          <button onClick={openModal} className="btn-a">
            BOOK A CLASS
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
      <div className="calendar-text">
        <>
          <h1>GROUP CLASSES</h1>
          <p> Here's our schedule for September-December 2023.</p>
        </>
        <img src="/images/schedule/calendar.png" alt="calendar" />
        <div className="schedule-app-buttons">
          <button onClick={openModal} className="btn-a">
            BOOK A CLASS
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
          <button className="btn-b">DOWNLOAD</button>
        </div>
      </div>
      <div className="personal-training">
        <h1>WANT TO START WITH PERSONAL TRAINING?</h1>
        <p>
          We will get touch with you to answer your questions or schedule a
          visit.
        </p>
        <button onClick={openModal} className="training-btn">
          BOOK NOW
        </button>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default ScheduleApp;
