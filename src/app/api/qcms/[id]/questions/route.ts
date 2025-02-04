import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

// ➤ Récupération de tous les utilisateurs (GET)
export const GET = async () => {
    const questions = await prisma.question.findMany({});
    return NextResponse.json({ message: "Question:", questions} );
};

// ➤ Création d'un utilisateur (POST)
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const newQuestion = await prisma.question.create({
        data: {
            statement: body.statement
        }
    })
    return NextResponse.json({ message: `Created new question`, newQuestion });
};


