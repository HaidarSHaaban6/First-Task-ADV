import "./HotelInfo.css";

let villaInfo = [
  {
    key: 0,
    img: "./../../../public/images/images/info-icon-01.png",
    paragraphUnderImg: "",
    header: "250 m2",
    mainParagraph: "Total Flat Space",
  },
  {
    key: 1,
    img: "/../../../public/images/images/info-icon-02.png",
    paragraphUnderImg: "",
    header: "Contract",
    mainParagraph: "Contract Ready",
  },
  {
    key: 2,
    img: "./../../../public/images/images/info-icon-03.png",
    paragraphUnderImg: "Process",
    header: "Payment",
    mainParagraph: "Payment",
  },
  {
    key: 3,
    img: "./../../../public/images/images/info-icon-04.png",
    paragraphUnderImg: "Control",
    header: "Safety",
    mainParagraph: "24//7 Under",
  },
];

const HotelInfo = () => {
  return (
    <div className="container hotel-info display-flex padding-top-200 padding-bottom-100 justify-content-space-around flex-wrap gap-30">
      <div className="img-section">
        <img
          className="style-featured-img-sm-by-haidar"
          src="./../../../public/images/images/featured.jpg"
          alt="featured"
        />
        <span className="display-flex justify-content-center align-item-center background-color-orange featured-icon">
          <img
            className="width-feature-icon-img-md-40"
            src="./../../../public/images/images/featured-icon.png"
            alt="featured-icon"
          />
        </span>
      </div>
      <div className="link-section width-38-hotel-info order-md-1-by-haidar">
        <h5 className="color-orange before-line margin-bottom-50 margin-bottom-md-35-by-haidar  font-weight-700">
          FEATURED
        </h5>
        <h1 className="margin-bottom-80 margin-bottom-md-55-by-haidar font-weight-800 width-50 width-md-100-by-haidar">
          Best Appartment & Sea View
        </h1>
        <div className="background-color-light-gray padding-10">
          <h5 className="color-orange border-bottom">Best useful links ?</h5>
          <p className="margin-bottom-30">
            Lorem ipsum dolor sit,
            <span className="font-weight-700 margin-y-2">
              amet consectetur adipisicing
            </span>
            elit. Voluptatem similique nostrum tenetur impedit magni, unde
            temporibus deleniti.
            <span className="color-blue margin-y-2">
              Utitaque corporis aut, doloremquesit
            </span>
            impedit, odit architecto cumque nisi veniam consequuntur
          </p>
          <p className="border-bottom font-weight-500">How does this work ?</p>
          <p className="font-weight-500">Why is Villa Agency the best ?</p>
        </div>
      </div>
      <div className="info-section width-23-percent border-radius-circle width-md-30-percent-by-haidar">
        {villaInfo.map((villa, index) => (
          <div
            key={villa.key}
            className={
              index === villaInfo.length - 1
                ? "display-flex justify-content-center align-item-center info-section-container gap-30"
                : "display-flex justify-content-center align-item-center info-section-container info-section-border gap-30"
            }
          >
            <div>
              <img src={villa.img} alt={`info-icon-${villa.key}`} />
              <p className="margin-zero">{villa.paragraphUnderImg}</p>
            </div>
            <div className="margin-left-25">
              <h3 className="margin-zero">{villa.header}</h3>
              <p className="margin-zero font-size-14 font-size-md-12-by-haidar">
                {villa.mainParagraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelInfo;
