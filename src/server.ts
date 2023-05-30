import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';

const app = express();

app.disable('x-powered-by');

app.use(cors());
// App.use(helmet());
app.use(bodyParser.json());

const schema = buildSchema(`#graphql
	type Query {
		hello: String
	}	
`);

const root = {
	hello() {
		return 'Hello world!';
	},
};
const graphQl = graphqlHTTP({
	schema,
	rootValue: root,
	graphiql: true,
});

app.use(
	'/graphql',
	graphQl,
);

const port = process.env.PORT ?? '3000';

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

export {app};
