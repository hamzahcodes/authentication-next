import RegisterForm from "./RegisterForm"
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { options } from "../api/auth/[...nextauth]/options"

const page = async () => {
    // const session = await getServerSession(options)
    // if(session) redirect("/dashboard")
    return <RegisterForm />
}

export default page