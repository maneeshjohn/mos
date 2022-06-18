import { createContext, useContext } from "react";

import { useProcess } from "../hooks";
import { processTypes } from "../types";
import { getProcesses } from "../utils/processManager";

const ProcessContext = createContext<processTypes.ProcessContext>({
  processes: getProcesses(),
  manageProcesses: () => {}
});

const ProcessProvider: React.FC = ({ children }) => {

  const { processes, setProcesses } = useProcess();

  return(
    <ProcessContext.Provider value={{ processes, manageProcesses: setProcesses }}>
      {children}
    </ProcessContext.Provider>
  );
}

const useProcesses = () => useContext(ProcessContext).processes;

const useManageProcesses = () => useContext(ProcessContext).manageProcesses;

export { 
  ProcessProvider,
  ProcessContext,
  useProcesses,
  useManageProcesses
}