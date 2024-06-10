import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomersService } from "../services/ListCustomersService"

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomersService = new ListCustomersService();

        const costumers = listCustomersService.execute();

        reply.send(costumers);
    }
}

export { ListCustomersController }