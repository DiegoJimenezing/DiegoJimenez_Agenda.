import express from 'express' 
import agendaRoutes from './routes/agenda.routes.js'


const app = express()

app.use(express.json())

//rutas
app.use('/api',agendaRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
  });


export default app;