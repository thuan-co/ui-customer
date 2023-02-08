import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";

export default function Payment() {

    const [value, setValue] = useState('COD');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <div>
            
            {/* payment method */}
            <div className="bg-slate-200 pl-3">
                <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group"><span>Phương thức thanh toán</span></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        defaultValue={value}
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="COD" control={<Radio />} label="COD" />
                        <FormControlLabel value="male" control={<Radio />} label="Khác" />
                    </RadioGroup>
                </FormControl>
            </div>
            <Button variant="contained">Checkout</Button>
        </div>
    );
};