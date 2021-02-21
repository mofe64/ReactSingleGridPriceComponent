import CardBottomLeft from "./cardBottom-left";
import CardBottomRight from "./cardBottom-right";
import '../src/css/cardBottom.css'
const CardBottom = ()=> 
    <div className="card--bottom">
        <CardBottomLeft></CardBottomLeft>
        <CardBottomRight></CardBottomRight>
    </div>

export default CardBottom;
