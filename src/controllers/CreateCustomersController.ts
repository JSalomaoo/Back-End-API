import {FastifyRequest, FastifyReply} from "fastify";

import { CreateCustomersService } from "../services/createCustomersService";

class CreateCustomersController{
    async handle(request: FastifyRequest, replay: FastifyReply){
        const {name, email} = request.body as {name: string, email:string};

        console.log(name);
        console.log(email);

        const customersService = new CreateCustomersService()

        const customer = await customersService.execute({name, email});

        replay.send(customer)

    }
}

export {CreateCustomersController}