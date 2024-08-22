import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./CardComponent.css";

const CardComponent = ({ propertiesData }) => {
  return (
    <div className="property-card padding-40 card-padding-md adding-background-color-for-card position-relative">
      <img
        className="width-100 border-radius-circle-card-img "
        src={propertiesData.img}
        alt=""
      />
      <div className="display-flex justify-content-space-between margin-y-20">
        <p className="margin-zero background-color-light-orange add-style-for-type">
          {propertiesData.type}
        </p>
        <p className="margin-zero color-orange font-weight-700 add-style-for-price font-size-20">
          {propertiesData.price}
        </p>
      </div>
      <p className="margin-zero font-weight-700 margin-y-20 font-size-20">
        {propertiesData.location}
      </p>
      <div className="property-rooms-info display-flex flex-wrap border-bottom-property-room ">
        <span className="property-room-info-item">
          Bedrooms:{" "}
          <span className="font-weight-600">
            {propertiesData.propertyRoomsInfo[0]}
          </span>
        </span>
        <span className="property-room-info-item">
          Bathrooms:{" "}
          <span className="font-weight-600">
            {propertiesData.propertyRoomsInfo[1]}
          </span>
        </span>
        <span className="property-room-info-item">
          Area:{" "}
          <span className="font-weight-600">
            {propertiesData.propertyRoomsInfo[2]}
          </span>
        </span>
        <span className="property-room-info-item">
          Floor:{" "}
          <span className="font-weight-600">
            {propertiesData.propertyRoomsInfo[3]}
          </span>
        </span>
        <span className="property-room-info-item">
          Parking:{" "}
          <span className="font-weight-600">
            {propertiesData.propertyRoomsInfo[4]}
          </span>
        </span>
      </div>
      <div className="center-properties-btn">
        <ButtonComponent text={"Schedual a Vist"} active={false} />
      </div>
    </div>
  );
};

export default CardComponent;
