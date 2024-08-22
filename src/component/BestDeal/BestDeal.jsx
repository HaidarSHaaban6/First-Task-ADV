import { useState } from "react";
import "./BestDeal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

let buttonData = [
  {
    key: 0,
    buttonInfo: "Appartment",
    active: true,
    totalFlatSpace: "185 m2",
    floorNumber: "26th",
    numberOfRooms: 4,
    parkingAvailable: "yes",
    paymentProcess: "Bank",
    p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem, adipisci voluptatum, commodi tenetur ad cum rationerepudiandae rerum amet necessitatibus sunt tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
    p2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Exercitationem, adipisci voluptatum, commodi tenetur ad cum rationerepudiandae rerum amet necessitatibus sunt tempora Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
  {
    key: 1,
    buttonInfo: "Villa House",
    active: false,
    totalFlatSpace: "200 m2",
    floorNumber: "24th",
    numberOfRooms: 6,
    parkingAvailable: "No",
    paymentProcess: "Bank",
    img: "/../../../public/images/images/deal-07.jpg",
    p1: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto veritatis odio eos asperiores tempore vel beatae non quidem magnam dignissimos libero natus perspiciatis excepturi recusandae, qui saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui ipsam natus quibusdam sint earum quidem velitLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
  {
    key: 2,
    buttonInfo: "Penthouse",
    active: false,
    totalFlatSpace: "260 m2",
    floorNumber: "46th",
    numberOfRooms: 9,
    parkingAvailable: "yes",
    paymentProcess: "Bank",
    p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui ipsam natus quibusdam sint earum quidem velit Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
    p2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto veritatis odio eos asperiores tempore vel beatae non quidem magnam dignissimos libero natus perspiciatis excepturi recusandae, qui saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dicta.",
  },
];

const BestDeal = () => {
  const [activeState, setActiveState] = useState(buttonData);

  const handleActiveState = (key) => {
    const newState = activeState.map((state) => {
      if (state.key === key) {
        return { ...state, active: true };
      } else {
        return { ...state, active: false };
      }
    });

    setActiveState(newState);
  };

  return (
    <div className="container best-deal-section display-flex justify-content-center flex-direction-column padding-top-100 padding-bottom-100">
      <div className="display-flex align-item-center justify-content-space-between flex-wrap justify-content-md-center-best-deal">
        <div className="text-align-md-center-best-deal justify-content-md-center-best-deal-header">
          <h5 className="before-line-best-deal color-orange font-weight-700 margin-bottom-30">
            BEST DEAL
          </h5>
          <h1 className="width-60-percent font-weight-800">
            Find Your Best Deal Right Now!
          </h1>
        </div>
        <div className="display-flex justify-content-center align-item-center">
          {activeState.map((btn) => {
            return (
              <button
                key={btn.key}
                className={
                  btn.active
                    ? "color-white style-best-deal-btn background-color-orange"
                    : "color-white background-color-black style-best-deal-btn"
                }
                onClick={() => handleActiveState(btn.key)}
              >
                {btn.buttonInfo}
              </button>
            );
          })}
        </div>
      </div>
      <div className="display-flex justify-content-space-between padding-top-100 flex-wrap gap-30 justify-content-md-center-best-deal">
        <div className="info-section width-23-percent border-radius-circle">
          {activeState.map((btnActivated) => {
            return (
              btnActivated.active && (
                <>
                  <div
                    key={`${btnActivated.key}-totalFlatSpace`}
                    className="border-bottom"
                  >
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Total Flat Space
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.totalFlatSpace}
                      </span>
                    </p>
                  </div>
                  <div
                    key={`${btnActivated.key}-floorNumber`}
                    className="border-bottom"
                  >
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Floor Number
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.floorNumber}
                      </span>
                    </p>
                  </div>
                  <div
                    key={`${btnActivated.key}-numberOfRooms`}
                    className="border-bottom"
                  >
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Number Of Rooms
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.numberOfRooms}
                      </span>
                    </p>
                  </div>
                  <div
                    key={`${btnActivated.key}-parkingAvailable`}
                    className="border-bottom"
                  >
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Parking Available
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.parkingAvailable}
                      </span>
                    </p>
                  </div>
                  <div key={`${btnActivated.key}-paymentProcess`}>
                    <p className="margin-zero color-gray font-size-18 display-flex justify-content-space-between">
                      Payment Process
                      <span className="color-black font-weight-700 font-size-20 margin-x-10">
                        {btnActivated.paymentProcess}
                      </span>
                    </p>
                  </div>
                </>
              )
            );
          })}
        </div>
        <div>
          <img
            className="width-md-100-info-section-img"
            src="./../../../public/images/images/deal-01.jpg"
            alt=""
          />
        </div>
        <div className="width-25-percent order-md-1-best-deal">
          <h5 className="margin-bottom-30">Extra Info About Property</h5>
          {activeState.map((textActivated) => {
            return (
              textActivated.active && (
                <>
                  <p
                    className="margin-bottom-30 color-gray font-size-18"
                    key={textActivated.key}
                  >
                    {textActivated.p1}
                  </p>
                  <p
                    className="margin-bottom-30 color-gray font-size-18"
                    key={textActivated.key}
                  >
                    {textActivated.p2}
                  </p>
                  {/* <div className="schedual-vist display-flex background-color-black">
                    <a
                      className="icon background-color-orange margin-negative schedual-vist-icon"
                      href="#"
                    >
                      <FontAwesomeIcon icon={faCalendar} />
                    </a>
                    <p className="color-white margin-zero font-size-14 padding-8">
                      Schedual a Vist
                    </p>
                  </div> */}
                  <ButtonComponent text={"Schedual a Vist"} active={true} />
                </>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
