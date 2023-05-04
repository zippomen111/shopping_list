import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
    id: number,
    value: string
}

export interface ListState {
    value: string,
    items: Item[],
}

const initialState: ListState = {
    value: "",
    items: [],
}

export const ListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        setList: (state, action: PayloadAction<Item>) => {
            state.items.push(action.payload)
        },
        onDelete: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((obj: Item) => obj.id !== action.payload)
        },
    },
})

export const { setValue, setList, onDelete } = ListSlice.actions

export default ListSlice.reducer
