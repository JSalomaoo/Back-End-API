import prismaClient from "../prisma";

interface DeleteCustomersProps{
    id: string;
}

class DeleteCustomersService {
    async execute({id} : DeleteCustomersProps){
        if(!id){
            throw new Error("Solicitação Inválida")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Cliente não encontrado.")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com Sucesso!" }
    }
}

export { DeleteCustomersService }