import React, { useState, createContext } from "react";

const fecthedData = createContext();

function Context(props) {
  const [mapData, setMapData] = useState([
    "guide",
    "33100",
    "0",
    "0.64",
    "0.01",
    "14720000000",
    "0.27,0.27,0.27,0.27,0.27,0.27,0.18,0.18,0.45,1.00,0.27,0.27",
    "11"
  ]);

  return (
    <fecthedData.Provider value={{ mapData, setMapData }}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
