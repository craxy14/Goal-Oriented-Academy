import { useState } from 'react'
import './App.css'



// შექმენით კომპონენტი სახელად ColorChange სადაც გექნებათ ღილაკი ინფუთი და პარაგრაფი, მომხმარებელი როდესაც ინფუთში შეიყვანს რაიმე ფერს და ღილაკს დააჭერს, ამ პარაგრაფმა უნდა შეიცვალოს ფერი და გახდეს ინფუთში შეტანილი ფერის
function ColorChange() {
    const [color, setColor] = useState("black");
  
    const handleChange = (e) => {
      setColor(e.target.value);
    };
  
    return (
      <div className="app">
        <p style={{ color }}>The color is {color}</p>
  
        <input
          type="color"
          onChange={handleChange}
          placeholder="Please enter color"
        />
      </div>
    );
  }

export default ColorChange
