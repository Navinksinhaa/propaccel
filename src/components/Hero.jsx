
import business from "../assets/business.jpg";
import smile from "../assets/smile.jpg";
// import group from "../assets/Group.jpg";
// import vector from "../assets/Vector.jpg";

const Hero = () => {
    return (
        <div className="hero">
            <div className="podcast">
                <h1>Learn how to launch a succesful podcast</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <button>Sign Up Now</button>
            </div>
            <div className="group">
                <img className="smile" src={smile} alt="business.jpg"/>
                <img className="business" src={business} alt="business.jpg"/>
                {/* <img className="group" scr={group} alt="group.jpg"/>
                <img className="vector" scr={vector} alt="vector.jpg"/> */}
            </div>
        </div>
    )

}

export default Hero