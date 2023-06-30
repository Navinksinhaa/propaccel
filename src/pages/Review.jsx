
import CustomerReview from "../components/CustomerReview";

const Review = () => {
    return (
        <>
            <div className="customer">
                <h1>Review from customers</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry</p>
            </div>
            <div className='rounded-xl'>
                <CustomerReview />
                <CustomerReview />              
            </div>
            
        
        </>
    )
}

export default Review