import React, { useState } from "react";
import { Button, Container, TextField, Autocomplete } from "@mui/material";

function InputHW1() {
    const [list, setList] = useState(["Anton", "Don", "Vlad"]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() && !list.includes(inputValue)) {
            setList([...list, inputValue]);
        }
        setInputValue(""); // Очистка поля
    };

    return (
        <Container maxWidth="lg">
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                <Autocomplete
                    freeSolo
                    options={list}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                    renderInput={(params) => <TextField {...params} label="Введите имя" />}
                    style={{ flex: 1 }}
                />
                <Button variant="contained" onClick={handleAdd}>
                    Ввод
                </Button>
            </div>
        </Container>
    );
}

export default InputHW1;
