import { Checkbox } from '@mui/material'
import React from 'react'

const CheckBox = ({workPercentage, handleCheck, status}) => {
    const [checked, setChecked] = React.useState(false);
    // setChecked(handlerSubmit())
    // console.log(handlerSubmit());
    React.useMemo(() => {
        if(!status) setChecked(status)
    },[status])
  return (
    <><Checkbox
    // ref={checkboxRef}
    onClick={() => setChecked(!checked)}
    checked={checked}
    name={workPercentage}
    onChange={handleCheck}
    color={"primary"}
    sx={{ color:"auto"}}
  /></>
  )
}

export default CheckBox