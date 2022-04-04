import { processTypes } from "../types";
import { processMap } from "../constants";

import Taskbar from "../components/process/Taskbar";

const processList = [
  processMap.TASKBAR
];

const processDetails: processTypes.Processes = {
  [processMap.TASKBAR]: {
    component: Taskbar,
    hasWindow: false 
  }
}

const getProcesses = ():processTypes.Processes => {
  return processList.reduce((processes, processId) => ({
    ...processes,
    [processId]: processDetails[processId]
  }), {});
}

export {
  getProcesses,
  processDetails
}