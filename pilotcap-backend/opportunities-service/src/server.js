const app = require('./app');
const connectDB = require('./config/db');

const PORT = 5004;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Opportunity service en écoute sur le port ${PORT}`);
    });
});
