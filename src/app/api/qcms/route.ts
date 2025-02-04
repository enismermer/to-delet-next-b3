import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

// ➤ Récupération de tous les utilisateurs (GET)
export const GET = async () => {
    const qcms = await prisma.qCM.findMany({});
    return NextResponse.json({ message: "QCM:", qcms} );
};

// ➤ Création d'un utilisateur (POST)
export const POST = async (request: NextRequest) => {
    const body = await request.json();
    const newQcm = await prisma.qCM.create({
        data: {
            title: body.title,
            imageSrc: body.imageSrc
        }
    })
    return NextResponse.json({ message: `Created new QCM`, newQcm });
};


