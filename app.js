const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mostafa:mostafa1@cluster0-xdjy1.mongodb.net/graphql');
mongoose.connection.once('open',() =>{
    console.log('database is okay')
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4001, () => {
    console.log('now listening for requests on port 4000');
});
