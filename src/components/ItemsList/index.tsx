import ListItem from '@mui/material/ListItem';
import { Box, List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../store/store";
import { onDelete } from '../../store/slice';

interface Item {
    id: number,
    value: string
}
const ItemsList = (): JSX.Element => {
    const items = useSelector((state: RootState) => state.list.items)
    const dispatch = useDispatch();

    return (
        <Box sx={{ width: "100%", maxWidth: "290px", margin: "0 auto" }}>
            <List>
                {items.map((item: Item) => (
                    <ListItem disablePadding key={item.id}>
                        <ListItemButton onClick={() => dispatch(onDelete(item.id))}>
                            <ListItemText primary={item.value} />
                            <DeleteForeverIcon />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ItemsList;
