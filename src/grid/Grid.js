import React, { useEffect, useState } from "react";
import "../grid/Grid.scss";

function ReactGridLayout(props) {
  const [boxCount, setBoxCount] = useState(props.boxes);
  const newArray = [];
  for (let i = 0; i < boxCount; i++) {
    newArray.push(i + 1);
  }

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.coloums}, 1fr)`,
    gap: "10px",
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.target.textContent} WAS CALLED`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    newArray.forEach((ele) => {
      const gridElement = document.querySelector(`.grids[data-id="${ele}"]`);
      if (gridElement) {
        observer.observe(gridElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [newArray]);

  return (
    <div style={gridStyles}>
      {newArray.map((ele) => (
        <div key={ele} className="grids" data-id={ele}>
          {ele}
        </div>
      ))}
    </div>
  );
}

export default ReactGridLayout;
