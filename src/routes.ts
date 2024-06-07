import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"

import { CreateCustomersController } from "./controllers/CreateCustomersController"

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, replay: FastifyReply) => {
        return {ok : true}
    })

    fastify.post("/customer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreateCustomersController().handle(request, replay)

    })
}