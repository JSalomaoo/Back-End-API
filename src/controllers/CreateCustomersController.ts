import {FastifyRequest, FastifyReply} from "fastify";

import { CreateCustomersService } from "../services/createCustomersService";

class CreateCustomersController{
    async handle(request: FastifyRequest, replay: FastifyReply){

        const customersService = new CreateCustomersService()

        const customer = await customersService.execute();

        replay.send(customer)

    }
}

export {CreateCustomersController}