import React from "react";
import { SCHED_TABS_STUFF } from "../../constants";

const ScheduleTabs = () => {
  return (
    <section id="schedule">
      <div className="schedule-all">
        <div className="title">
          <h4 className="light-blue-color">{SCHED_TABS_STUFF.subTitle}</h4>
          <h1 className="white">{SCHED_TABS_STUFF.title}</h1>
        </div>
        <div className="schedule-tabs-all">
          <div className="tab-sec-1 s-tabs">
            <img src={SCHED_TABS_STUFF.tab1} alt="" />
            <img src={SCHED_TABS_STUFF.tab2} alt="" />
          </div>
          <div className="tab-sec-2 s-tabs">
            <img src={SCHED_TABS_STUFF.tab3} alt="" />
          </div>
          <div className="tab-sec-3 s-tabs">
            <img src={SCHED_TABS_STUFF.tab4} alt="" />
            <img src={SCHED_TABS_STUFF.tab5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleTabs;
