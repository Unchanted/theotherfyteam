import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import ChatPage from '../planchat';
import AppCurrentVisits from '../app-current-visits';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <ChatPage />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          
        </Grid>
     
        <Grid xs={12} md={6} lg={4}>
          
        </Grid>
      </Grid>
    </Container>
  );
}
