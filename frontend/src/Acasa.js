import logo from "./img/logo.png";
import Retete from "./img/Retete.png";
import cartofi from "./img/cartofi.png";
import supa from "./img/supa.png";
import pateu from "./img/pateu.png";

const Acasa = () => {
  return (
    <div className="Acasa">

      
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "558.73px",
            height: "304px",
            position: "relative",
            marginTop: "30vh",
            marginBottom: "30vh",


          }} ></img>
      </div>

        <div className="blue-stripe">
          <img
            src={Retete}
            alt="Retete"
            className="food-container-image"
          />
          {/* Recipe Images */}
          <div className="recipes">
            <img src={supa} alt="Supa" className="recipe-image" />
            <img src={pateu} alt="Pateu" className="recipe-image" />
            <img src={cartofi} alt="Cartofi" className="recipe-image" />
          </div>
        </div>


        <div className="contact-section">
          <h2>Contact Us</h2>

          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>

        </div>

        {/* Footer */}
        <div className="footer">
          <p>Follow us on:</p>
          <div className="icons">
            <img src="./path-to-facebook-icon.png" alt="Facebook" />
            <img src="./path-to-instagram-icon.png" alt="Instagram" />
            <img src="./path-to-twitch-icon.png" alt="Twitch" />
          </div>
        </div>



      
    </div>


  );
}

export default Acasa; <div>className="Acasa"</div>