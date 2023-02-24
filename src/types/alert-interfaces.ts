import { AlertColor } from "@mui/material";

export type AlertContent = {
  title: string;
  text: string;
  severity: AlertColor;
};
export type Alert = { alertContent: AlertContent; quantity: number };
