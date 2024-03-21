import HomeSection from "./components/home-components/Home";
import Serveces from "./components/home-components/Serveces";
import VideoPlayer from "./components/home-components/VideoPlayer";
import Products from "./components/home-components/Products";
import "./page.module.css";
import Help from "./components/home-components/Help";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <div className="row row-gap-5">
            <div
              className="col-12 d-flex justify-content-center align-items-center"
              style={{ minHeight: "40vh" }}
            >
              <HomeSection />
            </div>
            <div className="col-12">
              <VideoPlayer />
            </div>
            <div className="col-12">
              <Products />
            </div>
            <div className="col-12">
              <Serveces />
            </div>
            <div className="col-12">
              <Help />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
