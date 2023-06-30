


const PriceCard = (props) => {
    return (
        <>
        <div className={`pricecard ${props.className}`}>
            <h1>{props.planname}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            <h2>$ 54 <span>/month</span></h2>
            <ul>
                <li>Free Access to video class</li>
                <li>Free Access to video class</li>
                <li>Free Access to video class</li>
            </ul>
            <button>Start free Trial</button>
        </div>
            
        </>
    )
}

export default PriceCard