
import lolla from "../assets/Lolla 1.jpg"

const CustomerReview = () => {
        return (
            <>
                <div className="reviewcard">
                    <div className="frame">
                        <img src={lolla} className="lolla" alt="lolla.jpg"/>
                        <div className="data">
                            <h2>Lolla Smith</h2>
                            <h6>Microsoft</h6>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make </p>
                </div>
            
            
            </>
        )
}

export default CustomerReview