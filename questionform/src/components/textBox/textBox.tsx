import { ChangeEvent, FC, useEffect, useState } from "react";
import '../textBox/textBox.css'


const Box: FC = () => {
    const [text, setText] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {  setText(event.target.value);
    }

    useEffect(() => {
      console.log(text)
    },[text])

    return (
      <div className="boxComponent">
        <label>
          <input className="box" type="text" name="rating" placeholder="Enter text" value={text} onChange={handleInputChange}/>
        </label>
        
      </div>
    )
}

export default Box;