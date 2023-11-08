import React, { useState } from "react";
import './style.css';



function Filter({selected,dataFilter, handleClickFilter}) {

  const [isVisible, setIsVisible] = useState(false);

  const handleOptionSelect = () => setIsVisible(!isVisible);

  const getSelected = (item) =>{
    setTimeout(() => {
      handleClickFilter(item);
    }, 0);
  }


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
        <span className="selected-value">{selected}</span>
        <span className="arrow"></span>
      </button>
      {
        isVisible && (
          <ul className="select-dropdown" role="listbox" id="select-dropdown">
            {
              dataFilter.map((item) => {
                return <li role="option" onClick={()=>getSelected(item)} key={item.id}>
                  <input type="radio" id={item.id} name="social-account" />
                  <label htmlFor={item.name}><i className="bx bxl-ordenar"></i>{item.name}</label>
                </li>
              })
            }

          </ul>
        )
      }
    </div>
  );
}

export default Filter;
