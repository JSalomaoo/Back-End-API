import {FastifyRequest, FastifyReply} from "fastify";

import { CreateCustomersService } from "../services/CreateCustomersService";

class CreateCustomersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, email} = request.body as {name: string, email:string};

        console.log(name);
        console.log(email);

        const customersService = new CreateCustomersService()

        const customer = await customersService.execute({name, email});

        reply.send(customer)

    }
}

export {CreateCustomersController}