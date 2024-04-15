import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import ChatPage from '../chat';
import AppCurrentVisits from '../app-current-visits';


// ----------------------------------------------------------------------

export default function AppView() {
  const [statData, setStatData]= useState([]);
  const [expectedStatData, setExpectedStatData]= useState([]);
  // fetch stats from backend
  fetch('http://localhost:5000/stats')
    .then((response) => response.json())
    .then((data) => {
      setStatData(data);
    });
  
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <ChatPage setFunc={setExpectedStatData} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Your Stats"
            chart={{
              series: [
                { label: 'Asset', value: 1234 },
                { label: 'Liability', value: 6545 },
                { label: 'Savings', value: 2234 },
                { label: 'kharcha', value: 3434 }
                ]
            }}
          />
          <AppCurrentVisits
            title="Expected Stats"
            chart={{
              series: [
                { label: 'Asset', value: 22234 },
                { label: 'Liability', value: 2342 },
                { label: 'Savings', value: 3345 },
                { label: 'kharcha', value: 1223 },
              ],
            }}
          />
        </Grid>
     
        <Grid xs={12} md={6} lg={4}>
          
        </Grid>
      </Grid>
    </Container>
  );
}
