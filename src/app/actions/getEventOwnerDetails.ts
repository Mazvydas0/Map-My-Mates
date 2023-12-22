import prisma from "@/lib/prismaDB"
import getCurrentUser from "./getCurrentUser"
import { getEventDetailsByIDProps } from "./getEventDetailsById"

export async function getEventOwnerDetails(params:getEventDetailsByIDProps){
    try {
     const {id} = params
     const currentUser = await getCurrentUser()

     if(!currentUser) return null
     
     const event = await prisma.events.findUnique({
        where: {
            id: id,
        },
        select: {
            userId: true
        }
     })

     return event
    } catch(err){
    
    }
}