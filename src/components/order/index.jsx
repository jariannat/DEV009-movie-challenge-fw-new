  import React, { useState } from "react";
  import './style.css';



  function Order(data) {
    const dataFilter = data.dataFilter;
  console.log('order', dataFilter)
    const [selectedOption, setSelectedOption] = useState(dataFilter[0]);
    const [isVisible, setIsVisible] = useState(false);

    const handleOptionSelect = () => {
      setIsVisible(!isVisible);
      console.log(isVisible)
    };

    
    return (
      <div className={`custom-select ${isVisible ? 'active' : ''}`}>
        <button
          className="select-button"
          role="combobox"
          aria-labelledby="select button"
          aria-haspopup="listbox"
          aria-expanded={isVisible} // Utiliza el estado isVisible para manejar la propiedad aria-expanded
          aria-controls="select-dropdown"
          onClick={handleOptionSelect} // Llama a handleOptionSelect sin paréntesis
        >
          <span className="selected-value">{selectedOption}</span>
          <span className="arrow"></span>
        </button>
        {
          isVisible && (
            <ul className="select-dropdown" role="listbox" id="select-dropdown">
              {
                dataFilter.map((item)=>{
                return <li role="option" onClick={()=>{setSelectedOption(item)}} key={item}>
                <input type="radio" id={item} name="social-account" />
                <label htmlFor={item}><i className="bx bxl-ordenar"></i>{item}</label>
              </li>
                })
              }
          
            </ul>
          )
        }
      </div>
    );
  }

  export default Order;
