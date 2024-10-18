import React, { useState, useEffect, useRef } from "react";
import './protfolio.css';

const WorksItems = ({ item }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const tooltipRef = useRef(null);

  const toggleTooltip = () => {
    setShowTooltip((prev) => !prev); // Toggle tooltip visibility
  };

  const closeTooltip = () => {
    setShowTooltip(false); // Close tooltip
  };

  const toggleHover = () => {
    setIsHovered((prev) => !prev); // Toggle hover state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        closeTooltip(); // Close the tooltip if clicked outside
      }
    };

    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  return (
    <div className="card" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <div className="card-content">
      <img src={item.image} alt='' className='work__img'/>
      <h3 className="work__title"> {item.title}</h3>
        {isHovered && (
          <div className="overlay">
            <button onClick={toggleTooltip}>See More</button>
          </div>
        )}
      </div>

      {showTooltip && (
        <div className="tooltip" ref={tooltipRef}>
           <button className="closing" onClick={toggleTooltip}>X</button>
          <h4>
                    {`More about ${item.name}`}</h4>
          <p>{`This is additional information about ${item.description}.`}</p>
          <button className="app">App Store</button>
         
        </div>
      )}
    </div>
  );
};

export default WorksItems;
