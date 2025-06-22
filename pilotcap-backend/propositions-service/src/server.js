const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/propositions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ MongoDB connected');
    app.listen(5003, () => console.log('🚀 Proposal service running on port 5003'));
}).catch(err => console.error('MongoDB error:', err));
