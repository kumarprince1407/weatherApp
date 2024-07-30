//weatherIcons.js
import {
  WiDaySunny,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayCloudy,
  WiDaySunnyOvercast,
} from "react-icons/wi";

const weatherIcons = {
  Sunny: WiDaySunny,
  "Clear sky": WiDaySunny,
  "Partly Cloudy": WiDaySunnyOvercast,
  "Partly cloudy": WiDaySunnyOvercast,

  Cloudy: WiCloud,
  Rain: WiRain,
  "Rain showers": WiRain,
};

export default weatherIcons;
