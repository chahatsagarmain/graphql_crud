import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';


async function init() {
    const app = express();
    const PORT = process.env.PORT || 8000;

    const gqlserver = new ApolloServer({
        typeDefs: `
            type Query {
                hello : String
            }
        `,
        resolvers: {
            Query : {
                hello : () => {
                    return  `hello query`
                }
            }
        },
    });

    await gqlserver.start();

    app.use(express.json());

    app.use("/graphql",expressMiddleware(gqlserver));

    app.get("/", (req, res, next) => {
        return res.status(200).json({ "message": "main route" });
    });

    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
    });
}

init();