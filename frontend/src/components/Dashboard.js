import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import './Dashboard.css'; // Asegúrate de crear este archivo para estilos adicionales si lo deseas

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            {/* Métrica 1: Bank Total */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-card" elevation={3}>
                <Typography variant="h6">Bank Total</Typography>
                <Typography variant="h4">$12,345</Typography>
              </Paper>
            </Grid>
            {/* Métrica 2: ROI */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-card" elevation={3}>
                <Typography variant="h6">ROI</Typography>
                <Typography variant="h4">15%</Typography>
              </Paper>
            </Grid>
            {/* Métrica 3: Profit */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-card" elevation={3}>
                <Typography variant="h6">Profit</Typography>
                <Typography variant="h4">$3,210</Typography>
              </Paper>
            </Grid>
            {/* Métrica 4: BB/100 */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-card" elevation={3}>
                <Typography variant="h6">BB/100</Typography>
                <Typography variant="h4">1.8</Typography>
              </Paper>
            </Grid>
          </Grid>
          {/* Tabla de Sesiones */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Sesiones Recientes
            </Typography>
            {/* Aquí puedes implementar una tabla interactiva utilizando Material-UI Table */}
            {/* Este es un ejemplo simplificado */}
            <Paper className="sessions-table" elevation={3}>
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1">
                  No hay sesiones recientes.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
