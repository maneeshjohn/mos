import React from "react";
import { useProcesses } from "../../contexts/process";

const ProcessLoader: React.FC = () => {

  const processes = useProcesses();

  return(
    <>
      {Object.keys(processes).map(key => {
        const Component = processes[key].component;
        return <Component />
      })}
    </>
  );
}

export default ProcessLoader;