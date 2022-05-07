//Depencencies
const morgan = require('morgan');
const express = require('express');
const app = express();
//Routers
const empleado = require('./routes/empleado');
const { use } = require('./routes/empleado');
const usuario = require('./routes/usuario');
//Midedleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", index);
app.use("/usuario", usuario);
app.use(auth);
app.use("/empleado", empleado);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
})