import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar/NavBar";
import CarouselComponent from "./component/CarouselComponent/CarouselComponent";
import HotelInfo from "./component/HotelInfo/HotelInfo";
import VideoView from "./component/VideoView/VideoView";
import BestDeal from "./component/BestDeal/BestDeal";
import Properties from "./component/Properties/Properties";
import GetInTouch from "./component/GetInTouch/GetInTouch";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CarouselComponent />
      <HotelInfo />
      <VideoView />
      <BestDeal />
      <Properties />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
