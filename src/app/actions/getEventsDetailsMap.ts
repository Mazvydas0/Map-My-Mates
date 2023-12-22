import prisma from "@/lib/prismaDB"
import getCurrentUser from "./getCurrentUser"

export async function getEventDataForMap() {
    try{
        const currentUser = await getCurrentUser()
        
        if(!currentUser) return null

        // get all users events data
        const events = await prisma.events.findMany()

        // refine latitude and longitude
        const updatedEvents = events.map((event:any) => ({
            ...event,
            latitude: parseFloat(event.latitude),
            longitude: parseFloat(event.longitude)
        }))

        return updatedEvents
    } catch(error:any){
        throw new Error(error)
    }
}