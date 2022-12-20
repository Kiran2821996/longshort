import React, { useState, createContext } from "react";

const fecthedData = createContext();

function Context(props) {
  const [mapData, setMapData] = useState([]);

  return (
    <fecthedData.Provider value={{ mapData, setMapData }}>
      {props.children}
    </fecthedData.Provider>
  );
}

export default Context;
export { fecthedData };
