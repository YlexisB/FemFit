import React from "react";

const ScheduleTabs = () => {
  return (
    <section id="schedule">
      <div className="schedule-all">
        <div className="title">
          <h4 className="light-blue-color">* Our Classes</h4>
          <h1 className="white">THE DAILY SCHEDULE</h1>
        </div>
        <div className="schedule-tabs-all">
          <div className="tab-sec-1 s-tabs">
            <img src="./images/schedule/class-tab-1.png" alt="" />
            <img src="./images/schedule/class-tab-2.png" alt="" />
          </div>
          <div className="tab-sec-2 s-tabs">
            <img src="./images/schedule/class-tab-3.png" alt="" />
          </div>
          <div className="tab-sec-3 s-tabs">
            <img src="./images/schedule/class-tab-4.png" alt="" />
            <img src="./images/schedule/class-tab-5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTabs;
