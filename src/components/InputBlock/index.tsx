import { Box, Button, Grid, Input } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setList, setValue } from "../../store/slice";

interface Item {
    id: number;
    value: string;
}

const InputBlock = (): JSX.Element => {
    const newItem = useSelector((state: RootState) => state.list.value);
    const dispatch = useDispatch();
    const item: Item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
    };
    const addItem = () => {
        if ((newItem.length >= 25) || (!newItem)) {
            dispatch(setValue(""));
            return alert("enter a short product name from 0 to 25 characters long!");
        }

        if (newItem) {
            dispatch(setList(item));
            dispatch(setValue(""));
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
            <Grid item xs={6} md={6} sm={6} lg={6}>
                <Input
                    placeholder="...add product"
                    autoFocus
                    required
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                        e.key === "Enter" ? addItem() : ""
                    }
                    value={newItem}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(setValue(e.target.value))
                    }
                />
            </Grid>
            <Grid>
                <Button variant="contained" onClick={() => addItem()} size="small">
                    Add
                </Button>
            </Grid>
        </Box>
    );
};

export default InputBlock;
