import products from "../data";
import './HomeScreen.css'

const HomeScreen =()=>{
    return(
        <div>
        {products.map((products)=>(
         products.name
        ))} 
        </div>
    )
}
export default HomeScreen;