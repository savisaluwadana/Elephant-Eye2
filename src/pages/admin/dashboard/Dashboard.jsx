// src/pages/admin/dashboard/Dashboard.jsx

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid, Paper } from '@mui/material';
import Overlay from '../modal/Overlay/Overlay.jsx';

export default function AdminDashboard() {
    const [isLocked, setIsLocked] = React.useState(true);

    const handleCloseOverlay = () => {
        setIsLocked(false);
    };

    return (
        <div>
            {isLocked && <Overlay onClose={handleCloseOverlay} />}
            <Grid container spacing={2} style={{ filter: isLocked ? 'blur(4px)' : 'none' }}>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <BarChart
                            series={[
                                { data: [35, 44, 24, 34] },
                                { data: [51, 6, 49, 30] },
                                { data: [15, 25, 30, 50] },
                                { data: [60, 50, 15, 25] },
                            ]}
                            height={290}
                            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: 10, label: 'Available' },
                                        { id: 1, value: 15, label: 'Booked' },
                                    ],
                                },
                            ]}
                            width={400}
                            height={200}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}