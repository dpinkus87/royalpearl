// import React, { useState } from 'react';
// import '../../PriorCollectionCarousel.css'; 
// import place1 from '../../Images/anna-stampfli-7GxPOMH2Mh4-unsplash.jpeg';
// import place2 from '../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg';
// import place3 from '../../Images/scott-webb-_7G_R_IWt1U-unsplash.jpeg';

// function PriorCollectionCarousel() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [cellCount, setCellCount] = useState(9);
//   const [isHorizontal, setIsHorizontal] = useState(true);

//   const rotateCarousel = () => {
//     const angle = (360 / cellCount) * selectedIndex * -1;
//     return {
//       transform: `translateZ(-288px) ${isHorizontal ? 'rotateY' : 'rotateX'}(${angle}deg)`,
//       transition: 'transform 1s',
//     };
//   };

//   const prevButtonClicked = () => {
//     setSelectedIndex((prevIndex) => prevIndex - 1);
//   };

//   const nextButtonClicked = () => {
//     setSelectedIndex((prevIndex) => prevIndex + 1);
//   };

//   const cellsRangeChanged = (event) => {
//     const newCellCount = parseInt(event.target.value);
//     setCellCount(newCellCount);
//   };

//   const orientationChanged = (event) => {
//     const newOrientation = event.target.value === 'horizontal';
//     setIsHorizontal(newOrientation);
//   };

//   const renderCells = () => {
//     const cells = [];
//     for (let i = 1; i <= cellCount; i++) {
//       const imageSrc = getImageForIndex(i);
//       cells.push(
//         <div key={i} className="carousel__cell">
//           <img src={imageSrc} alt={`Place ${i}`} />
//         </div>
//       );
//     }
//     return cells;
//   };

//   const getImageForIndex = (index) => {
//     switch (index) {
//       case 1:
//         return place1;
//       case 2:
//         return place2;
//       case 3:
//         return place3;
//       // Add more cases for additional images if needed
//       default:
//         return '';
//     }
//   };

//   return (
//     <div className="scene">
//       <div className="carousel" style={rotateCarousel()}>
//         {renderCells()}
//       </div>

//       <div className="carousel-options">
//         <p>
//           <label>
//             Cells
//             <input
//               className="cells-range"
//               type="range"
//               min="3"
//               max="15"
//               value={cellCount}
//               onChange={cellsRangeChanged}
//             />
//           </label>
//         </p>
//         <p>
//           <button className="previous-button" onClick={prevButtonClicked}>Previous</button>
//           <button className="next-button" onClick={nextButtonClicked}>Next</button>
//         </p>
//         <p>
//           Orientation:
//           <label>
//             <input
//               type="radio"
//               name="orientation"
//               value="horizontal"
//               checked={isHorizontal}
//               onChange={orientationChanged}
//             />
//             horizontal
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="orientation"
//               value="vertical"
//               checked={!isHorizontal}
//               onChange={orientationChanged}
//             />
//             vertical
//           </label>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default PriorCollectionCarousel;
