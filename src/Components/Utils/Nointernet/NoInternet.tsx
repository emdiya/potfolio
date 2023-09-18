import './NoInternet.css'
import NoInternetLogo from "../../../assets/no_internet.svg"
const NoInternet = () => {
  return (
    <div className="containerNoInternet">
       <img
        src={NoInternetLogo} // Replace with the actual image source
        alt="Your Image"
        className="container-image"
      />
    <h1>No Internet Connection</h1>
    
  </div>
  );
};

export default NoInternet;