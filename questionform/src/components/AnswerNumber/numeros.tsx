import { FC, useState} from "react";
import '../AnswerNumber/numeros.css'

const NumComponent: FC = () => {
const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];  
const [rating,setRating] = useState<number>(0);
  
return(
  <div className="numComponent">
    {numbers.map((item, index) => {
      return (
        <label key={index} >
          <input type="text" name="rating" value={item}
          className= { "text" + (rating == item ? " rating-active" : "") } 
          onClick={() => setRating(item)} 
          />
        </label>
      )
    })}
  </div>
)

}

export default NumComponent;