import React from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import "./Access.css";
import { AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import customMarker from "../../images/mapicon.png";

const yoyogi = { lat: 35.681824374216994, lng: 139.70169945402233 };
const API_KEY = process.env.REACT_APP_API_KEY;

export const MapWithMarker = React.memo(function Map() {
  const { ref, map, google } = useGoogleMaps(API_KEY, {
    zoom: 16,
    center: yoyogi,
  });
  const size = ["500px", "400px"];
  console.log("render MapWithMarkers");

  if (map) {
    // execute when map object is ready
    new google.maps.Marker({ position: yoyogi, map });
  }

  return (
    <div clasName="map" ref={ref} style={{ width: size[0], height: size[1] }}>
      <img
        src={customMarker}
        className="marker"
        lat={35.681824374216994}
        lng={139.70169945402233}
      />
    </div>
  );
});

function Access() {
  return (
    <div className="block-featureblock" id="access">
      <div className="container-fluid">
        <Fade duration={3000}>
          <div className="title-container">
            <h1>アクセス</h1>
          </div>
          <div className="access-container">
            <div className="text-container">
              <h1>株式会社システムプロット</h1>
              <h2>
                <AiFillPhone className="icons" />
                Tel: 080-1234-1234
              </h2>
              <h2>
                <MdLocationOn className="icons" />
                Address: 〒150-0022 東京都渋谷区渋谷1-2-3
              </h2>
              <h2>
                <BiTime className="icons" />
                Hours：月〜金　10:00 ~ 19:00
              </h2>
            </div>
            <MapWithMarker />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Access;
