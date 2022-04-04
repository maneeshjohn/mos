import React from "react";

export type Process = {
  component: React.ComponentType;
  hasWindow: boolean;
}

export type Processes = Record<string, Process>;

export type ProcessContext = {
  processes: Processes;
  manageProcesses: (p: Processes) => void;
}