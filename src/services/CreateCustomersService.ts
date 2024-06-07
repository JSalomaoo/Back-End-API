import prismaClient from "../prisma";

class CreateCustomersService{
    async execute(){

        console.log("ROTA FOI CHAMADA");

        return {ok:true}
    }
}

export {CreateCustomersService}