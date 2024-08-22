import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="my-container get-in-touch-section position-relative">
      <div className="display-flex flex-direction-column align-item-center font-weight-500 position-for-get-in-touch-text">
        <h5 className="color-orange before-line font-weight-700 width-fit-content margin-bottom-30 style-margin-bottom-md-15">
          Contact Us
        </h5>
        <h1 className="text-align-center color-white font-weight-800 style-get-in-touch-text">
          Get In Touch With Our Agent
        </h1>
      </div>
      <img
        className="width-100 height-90vh add-height-md-for-contact-img"
        src="./../../../public/images/images/contact-bg.jpg"
        alt=""
      />
      <div className="container display-flex justify-content-space-between justify-content-md-center-map-container gap-30 flex-wrap main-container">
        <div className="style-map-container-md">
          <iframe
            className="style-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.39567759774!2d-80.14705671009455!3d25.782538873412975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2z2YXZitin2YXZitiMINmB2YTZiNix2YrYr9in2Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1723966476957!5m2!1sar!2s"
            loading="lazy"
          ></iframe>
          <div className="display-flex justify-content-space-between flex-wrap justify-content-md-center-map-container">
            <div className="display-flex gap-30 style-get-in-touch-container">
              <img
                src="./../../../public/images/images/phone-icon.png"
                alt="phone-icon"
              />
              <div>
                <p className="margin-zero font-weight-700 font-size-18">
                  <a
                    className="text-decoration-none color-black"
                    href="tel:010-020-0340"
                  >
                    010-020-0340
                  </a>
                </p>
                <span className="color-gray font-size-14">Phone Number</span>
              </div>
            </div>
            <div className="display-flex gap-30 style-get-in-touch-container">
              <img
                className="style-get-in-touch-icon"
                src="./../../../public/images/images/email-icon.png"
                alt="email-icon"
              />
              <div>
                <p className="margin-zero font-weight-700 font-size-18">
                  <a
                    className="text-decoration-none color-black"
                    href="mailto:info@villa.com"
                  >
                    info@villa.com
                  </a>
                </p>
                <span className="color-gray font-size-14">Business Email</span>
              </div>
            </div>
          </div>
        </div>
        <form className="style-form" action="">
          <label
            htmlFor="full-name"
            className="display-block first-input-label"
          >
            Full Name
          </label>
          <input
            placeholder="Your Name..."
            type="text"
            name=""
            id="full-name"
          />
          <label htmlFor="email" className="display-block">
            Email Address
          </label>
          <input placeholder="Your E-mail..." type="email" name="" id="email" />
          <label htmlFor="subject" className="display-block">
            Subject
          </label>
          <input placeholder="Subject..." type="text" name="" id="subject" />
          <label htmlFor="message" className="display-block">
            Message
          </label>
          <textarea placeholder="Your Message" name="" id="message"></textarea>
          <div className="input-btn-margin-top">
            <ButtonComponent text={"Schedual a Vist"} active={false} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
