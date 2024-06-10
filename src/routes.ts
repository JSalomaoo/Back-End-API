import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCustomersController } from "./controllers/CreateCustomersController"
import { ListCustomersController } from "./controllers/ListCustomersController"

export async function routes(fastify:FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok : true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomersController().handle(request, reply)

    })

    fastify.get("/costumers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })
}