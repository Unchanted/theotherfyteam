import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Net Worth"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Debt"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Income"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Savings"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Financial Graph View"
            subheader="Bar Graph"
            chart={{
              labels: ['Income', 'Liabilities', 'Investments', 'Net Worth'],
              series: [
                {
                  name: 'Family',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 44, 22, 73],
                },
                {
                  name: 'Member A',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 27, 43],
                },
                {
                  name: 'Member C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'Asset', value: 4344 },
                { label: 'Liability', value: 5435 },
                { label: 'Savings', value: 1443 },
                { label: 'kharcha', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Risk Analysis"
            subheader="In Percent"
            chart={{
              series: [
                { label: 'Bonds', value: 30 },
                { label: 'Stocks', value: 70 },
                { label: 'Mutual Funds', value: 50 },
                { label: 'Real Estate', value: 60 },
                { label: 'Crypto', value: 80 },
                { label: 'Fixed Deposit', value: 20 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Family Portfolio Comparision"
            chart={{
              categories: ['Income', 'Liability', 'Saving', 'Loan', 'Risk', 'Math'],
              series: [
                { name: 'Member 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Member 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Member 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
