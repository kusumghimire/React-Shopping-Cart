import products from "../data";
import './HomeScreen.css'
import ProductCard from '../Components/ProductCard';

const HomeScreen =()=>{
    return(
        <div>
        {products.map((product)=>(<ProductCard key={product.id} product={product} />))} 
        </div>
    )
};

export default HomeScreen;