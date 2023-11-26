import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]/options";

export const GET = async (req, res) => {
    const session = await getServerSession(options);

    if(!session) {
        return NextResponse.json({ 'error': "unauthorized"}, { status: 401 })
    }

    return NextResponse.json({ 'session': session }, { status: 200 })
}