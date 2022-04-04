import { useState } from "react";

import { processTypes } from "../types";
import { getProcesses } from "../utils/processManager";

type UseProcess = () => ({ processes: processTypes.Processes, setProcesses: (p: processTypes.Processes) => void });

const useProcess: UseProcess = () => {
  const [processes, setProcesses] = useState(getProcesses());

  return { processes, setProcesses };
}

export default useProcess;