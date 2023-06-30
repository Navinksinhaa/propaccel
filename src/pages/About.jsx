
import Hero from "../components/Hero";
import Course from "../components/courses";



const About = () => {
    return (
        <>
            
            <Hero/>
            <div className="interactive">
                <div className="left">
                    <Course/>
                    <Course/>
                    <Course/>
                    <Course/>
                </div>
                <div className="right">
                    <h1>About the Course</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno</p>
                    <button>Explore Now</button>
                </div>
            </div>
            
        
        </>
        
    )
}

export default About