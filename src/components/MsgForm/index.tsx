import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import InputBlock from '../InputBlock';
import ItemsList from '../ItemsList';

const MsgForm = (): JSX.Element => {
    return (
        <Container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <InputBlock />
                <ItemsList />
            </Grid>
        </Container >
    );
};

export default MsgForm;
