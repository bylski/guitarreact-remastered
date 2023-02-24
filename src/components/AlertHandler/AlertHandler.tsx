import React, { useContext, useEffect, useState } from "react";
import { Alert, AlertTitle, Slide } from "@mui/material";
import { AppContext } from "../../store/AppContext";
import { Alert as AlertType } from "../../types/alert-interfaces";

const AlertHandler: React.FC = () => {
  const ctx = useContext(AppContext);
  const currentAlert = ctx?.currentAlert;
  let alertToDisplay: AlertType | null = null;
  if (currentAlert !== undefined) {
    alertToDisplay = currentAlert;
  }
  const [isClosing, setIsClosing] = useState(false);
  let alertQuantity = "1";
  if (alertToDisplay?.quantity) {
    alertQuantity =
      alertToDisplay?.quantity <= 10 ? `${alertToDisplay?.quantity - 1}` : `9+`;
  }

  const timeoutAlertClose = (time: number) => {
    // Wait until timeout
    const alertTimeout = setTimeout(() => {
      if (alertToDisplay?.alertContent) {
        // If timeout - close alert and remove it from context
        setIsClosing(true);
        setTimeout(() => {
          ctx?.onRemoveAlert(alertToDisplay?.alertContent.title!);
          setIsClosing(false);
        }, 500);
      }
    }, time);

    return alertTimeout;
  };

  // Close alert after timeout
  // const alertTimeout = timeoutAlertClose(6000)


  return (
    <Slide
      in={alertToDisplay !== null && !isClosing}
      direction="right"
      unmountOnExit
    >
      <Alert
        sx={{
          position: "fixed",
          bottom: "0px !important",
          zIndex: "1001",
          minWidth: "20%",
          width: "fit-content",
        }}
        severity={alertToDisplay?.alertContent.severity}
        onClose={() => {
          setIsClosing(true);
          setTimeout(() => {
            ctx?.onRemoveAlert(alertToDisplay?.alertContent.title!);
            setIsClosing(false);
          }, 500);
        }}
      >
        <AlertTitle>{`${alertToDisplay?.alertContent.title} ${
          alertToDisplay?.quantity! > 1 ? `(${alertQuantity})` : ""
        }`}</AlertTitle>
        {alertToDisplay?.alertContent.text}
      </Alert>
    </Slide>
  );
};

export default AlertHandler;
