import { NextResponse } from "next/server"
import User from "@/models/User"
import { connectToDB } from "@/utils/database"
import bcrypt from "bcrypt"

export const POST = async (req, res) => {
    try {
        await connectToDB()
        const { username, phoneNumber, password } = await req.json()
        console.log(username, phoneNumber, password)

        const hashedPassword = await bcrypt.hash(password, 10)
        // console.log(hashedPassword);
        const userExists = await User.findOne({ phoneNumber })
        if(userExists) return NextResponse.json({ message: "User already exists!"}, { status: 400 })

        const newUser = new User({
            username: username,
            phoneNumber: phoneNumber,
            password: hashedPassword
        })

        const createdUser = await User.create(newUser)
        if(createdUser) return NextResponse.json({ _id: createdUser._id, username: createdUser.username, phone: createdUser.phoneNumber}, { status: 201})
        return NextResponse.json({ message: "User not registered" }, { status: 400 })

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}