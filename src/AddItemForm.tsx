import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<boolean>(false)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError(true);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.key === 'Enter') {
            addItem();
        }
    }

    return <div>
        {/*<input value={title}*/}
        {/*       onChange={onChangeHandler}*/}
        {/*       onKeyPress={onKeyPressHandler}*/}
        {/*       className={error ? "error" : ""}*/}
        {/*/>*/}
        <TextField id="outlined-basic" label="Title is required" variant="outlined" size={"small"}
                   error={error}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
        />
        <Button variant={"contained"} size="small" style={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', backgroundColor: 'green'}}
                onClick={addItem}>+</Button>

        {error && <div className="error-message">{error}</div>}
    </div>
}
