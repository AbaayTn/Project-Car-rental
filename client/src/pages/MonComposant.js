import React, { useState } from 'react';
import { Range } from 'react-range';


function MonComposant({ onPriceChange }) {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  return (
    <div>
      <Range
        min={0}
        max={500}
        values={priceRange}
        step={10}
        onChange={handlePriceChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              background: 'deepskyblue',
              borderRadius: '3px',
              width: '170px',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '16px',
              width: '16px',
              borderRadius: '50%',
              background: '#fff',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
            }}
          />
        )}
      />
      <br />
      Price range: {priceRange[0]} dt - {priceRange[1]} dt
    </div>
  );
}

export default MonComposant;
