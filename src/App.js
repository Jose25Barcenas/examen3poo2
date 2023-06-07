import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [targetFloor, setTargetFloor] = useState(1);
  const [isElevatorMoving, setIsElevatorMoving] = useState(false);

  useEffect(() => {
    let intervalId;

    if (currentFloor < targetFloor) {
      intervalId = setInterval(() => {
        setCurrentFloor((prevFloor) => prevFloor + 1);
      }, 1000);
    } else if (currentFloor > targetFloor) {
      intervalId = setInterval(() => {
        setCurrentFloor((prevFloor) => prevFloor - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentFloor, targetFloor]);

  const handleFloorButton = (floor) => {
    if (!isElevatorMoving) {
      setTargetFloor(floor);
      setIsElevatorMoving(true);
    }
  };

  const handleStopButton = () => {
    setIsElevatorMoving(false);
  };

  const handleUpButton = () => {
    handleFloorButton(currentFloor + 1);
  };

  const handleDownButton = () => {
    handleFloorButton(currentFloor - 1);
  };

  return (
    <div className="app">
      <div className="floor-buttons">
        <button
        onClick={() => handleFloorButton(10)}
          className={`floor-button ${currentFloor === 10 ? 'active' : ''}`}
        >
          10
        </button>
        <button
        onClick={() => handleFloorButton(9)}
          className={`floor-button ${currentFloor === 9 ? 'active' : ''}`}
        >
          9
        </button>
        <button
          onClick={() => handleFloorButton(8)}
          className={`floor-button ${currentFloor === 8 ? 'active' : ''}`}
        >
          8
        </button>
        <button
          onClick={() => handleFloorButton(7)}
          className={`floor-button ${currentFloor === 7 ? 'active' : ''}`}
        >
          7
        </button>
        <button
          onClick={() => handleFloorButton(6)}
          className={`floor-button ${currentFloor === 6 ? 'active' : ''}`}
        >
          6
        </button>
        <button
          onClick={() => handleFloorButton(5)}
          className={`floor-button ${currentFloor === 5 ? 'active' : ''}`}
        >
          5
        </button>
        <button
          onClick={() => handleFloorButton(4)}
          className={`floor-button ${currentFloor === 4 ? 'active' : ''}`}
        >
          4
        </button>
        <button
          onClick={() => handleFloorButton(3)}
          className={`floor-button ${currentFloor === 3 ? 'active' : ''}`}
        >
          3
        </button>
        <button
          onClick={() => handleFloorButton(2)}
          className={`floor-button ${currentFloor === 2 ? 'active' : ''}`}
        >
          2
        </button>
        <button
          onClick={() => handleFloorButton(1)}
          className={`floor-button ${currentFloor === 1 ? 'active' : ''}`}
        >
          1
        </button>
        
      </div>

      <div className="control-buttons">
        {isElevatorMoving ? (
          <button onClick={handleStopButton} className="stop-button">
            Stop
          </button>
        ) : (
          <React.Fragment>
            <button onClick={handleUpButton} className="control-button">
              Subir
            </button>
            <button onClick={handleDownButton} className="control-button">
              Bajar
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default App;

/*Miguel Martinez
Jose Barcenas
Norvey Lopez
Diego Afanador */
