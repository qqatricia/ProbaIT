import logo from "./img/logo.png";
const Navrbar = () => {
    return (  
        <nav className="navbar" >
            <div className="logonav" >
            <img
          src={logo}
          alt="Logo"
          style={{
            objectFit: "contain",
            height: "130px",
            position: "relative",
            marginTop: "7vh",
            marginBottom: "5vh",


          }} ></img>
          </div>
                <div className="links">
                    <a href="www.google.com" style =   {{
                        color:"white",
                        backgroundColor: '#00236d',
                        borderRadius: '8px'
                    }}  >Login </a>
                    
                    <a href="/alta pagina"style =   {{
                        color:"white",
                        backgroundColor: '#00236d',
                        borderRadius: '8px'
                    }}  >Register </a>

                </div>
            
        </nav>


    );
}
 
export default Navrbar;