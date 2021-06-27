import {v4 as uuidv4} from 'uuid'
const Rating = ({value, text, color}) =>{
    return(
        <div className='rating'>
            {[1,2,3,4,5].map((rate)=>(
<span key={uuidv4()}></span>
            ))}
    
        </div>
    )
}
Rating.defaultProps ={
    color:'#ffa41c',
}

export default Rating;