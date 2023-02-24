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
      alertToDisplay?.quantity <= 100
        ? `${alertToDisplay?.quantity - 1}`
        : `99+`;
  }

  const closeAlertHandler = () => {
    setIsClosing(true);
    setTimeout(() => {
      ctx?.onRemoveAlert(alertToDisplay?.alertContent.title!);
      setIsClosing(false);
    }, 500);
  };

  // Start timeout count on first render and every time quantity changes
  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      if (alertToDisplay?.alertContent) {
        // If timeout - close alert and remove it from context
        setIsClosing(true);
        setTimeout(() => {
          ctx?.onRemoveAlert(alertToDisplay?.alertContent.title!);
          setIsClosing(false);
        }, 500);
      }
    }, 5000);

    // Clear the timeout when the component unmouns or if clear the previous render's timout
    // if new render occurs due to quantity or alert change
    return () => {
      clearTimeout(alertTimeout);
    };
  }, [alertToDisplay?.quantity]);

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
        onClose={closeAlertHandler}
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
