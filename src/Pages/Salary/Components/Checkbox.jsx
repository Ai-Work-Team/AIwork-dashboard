import { Checkbox } from "@mui/material";
import React from "react";

const CheckBox = ({ workPercentage, handleCheck, status }) => {
  const [checked, setChecked] = React.useState(false);
  React.useMemo(() => {
    if (!status) setChecked(status);
  }, [status]);
  return (
    <>
      <Checkbox
        onClick={() => setChecked(!checked)}
        checked={checked}
        name={workPercentage}
        onChange={handleCheck}
        color={"primary"}
        sx={{ color: "auto" }}
      />
    </>
  );
};

export default CheckBox;
