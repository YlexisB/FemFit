import React, { useState } from "react";
import Modal from "../Modal";
import { SCHEDULE_APP_STUFF } from "../../constants";

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
          <h1> {SCHEDULE_APP_STUFF.title}</h1>
          <p>{SCHEDULE_APP_STUFF.titleP}</p>
        </div>
        <div className="schedule-text-a schedule-text-b">
          <p>{SCHEDULE_APP_STUFF.titleP1}</p>
          <button onClick={openModal} className="btn-a">
            {SCHEDULE_APP_STUFF.cta}
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
      <div className="calendar-text">
        <>
          <h1>{SCHEDULE_APP_STUFF.title2}</h1>
          <p>{SCHEDULE_APP_STUFF.titleP2}</p>
        </>
        <img src={SCHEDULE_APP_STUFF.calendar} alt="calendar" />
        <div className="schedule-app-buttons">
          <button onClick={openModal} className="btn-a">
            {SCHEDULE_APP_STUFF.cta}
          </button>
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
          <a href="/images/schedule/calendar.png" className="btn-b" download>
            {SCHEDULE_APP_STUFF.download}
          </a>
        </div>
      </div>
      <div className="personal-training">
        <h1>{SCHEDULE_APP_STUFF.title3}</h1>
        <p>{SCHEDULE_APP_STUFF.title3P}</p>
        <button onClick={openModal} className="training-btn">
          {SCHEDULE_APP_STUFF.cta2}
        </button>
        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default ScheduleApp;
