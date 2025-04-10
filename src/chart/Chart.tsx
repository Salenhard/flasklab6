import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Navbar from "../main/components/Navbar";
import GroupChart from "./components/GroupChart";
import { years, countries, types } from "../groupdata";
type tSelect = "Страна" | "Год" | "Тип";
function Chart() {

    const [group, setGroup] = React.useState<tSelect>("Страна");
    const [groupData, setGroupData] = React.useState(countries);
    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup);
        switch (selectedGroup) {
            case "Страна":
                setGroupData(countries);
                break;
            case "Год":
                setGroupData(years);
                break;
            case "Тип":
                setGroupData(types);
                break;
        }

    }
    return (
        <div>
            <Navbar active="3" />
            <Box sx={{ width: "200px", m: "auto" }}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Страна"> Стране </MenuItem>
                        <MenuItem value="Год"> Году </MenuItem>
                        <MenuItem value="Тип"> Типу </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <GroupChart data={groupData} />

        </div>
    );
}

export default Chart