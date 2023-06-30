
import PriceCard from "../components/priceCard"



const Pricing = () => {
    
    return (
        <>
            <div class="plan">
                <h1>Choose your Plan</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's </p>
                <div className="year">
                    <p className="month">Monthly</p>
                    <span>Yearly</span>
                </div>
            </div>
            <div className="cards">
                <PriceCard planname={"Basic Plan"}/>
                <PriceCard planname={"Premium Plan"} className={"mypremiumstyle"}/>
                <PriceCard planname={"Basic Plan"}/>
            </div>
        </>

    )
}

export default Pricing