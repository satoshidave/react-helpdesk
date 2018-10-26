const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = 9001;

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`GraphQL server is running on port: ${port}`);
});
