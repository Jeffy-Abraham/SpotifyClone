import Background from "../../assests/background.mp4";
import Logo from "../../assests/logo.png";
import searchBarComponent from "../../components/search-bar-component/search-bar-component";
import CustomButton from "../../components/spotify-button.-component/spotify-button.component";
import GoogleButton from 'react-google-button'
import "./login-page.css";
export const LoginPage = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <video
        className="videoTag"
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          opacity: "0.1",
          height: "100vh",
          backgroundColor: "black",
        }}
        autoPlay="loop"
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="overlayText">
        <div>
          <img src={Logo} width="180px" />
        </div>
        <div>
          <input type="text" value='jeffyabraham@ubitof.com'/>
        </div>
        <div>
          <input type="password" value='chekthebase' />
        </div>
        <CustomButton text='Login'/>
        <GoogleButton style={{borderRadius:'5px',outline:'none'}}/>
        <h2 style={{color:'whitesmoke'}}>Click the login button or Sigin with Google</h2>
        <p style={{fontSize:'16px',color:'white'}}>Music for everyone</p>
      </div>
     
    </div>

  );
};
