import MyButton from './button'
const CardBottomLeft = ()=> 
    <div className="card--bottom--left">
        <h6>Monthly Subscription</h6>
        <div className="card--bottom--left--price">
            <p id="price">$29</p>
            <p id="session">Per Month</p>
        </div>
        <p>Full access for less than $1 a day</p>
        <MyButton></MyButton>
    </div>

export default CardBottomLeft;