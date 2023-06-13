import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function BasicCard() {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            sx={{
              mt: 2,
            }}
            item
            xs={6}
          >
            <Typography>New Conflict Check</Typography>
            <Typography>Amount : 300000</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography>New Conflict Check</Typography>
            <Typography>Amount : 300000</Typography>
            <Typography>New Conflict Check</Typography>
            <Typography>Amount : 300000</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
