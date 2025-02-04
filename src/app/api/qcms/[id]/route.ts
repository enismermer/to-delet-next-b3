import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

// ➤ Récupération d'un questionnaire (GET)
export const GET = async (
    req: NextResponse,
    { params: { id } }: { params: { id: string } }
) => {
    const qcms = await prisma.qCM.findFirst({
        where: {id: parseInt(id)}
    });
    return NextResponse.json({ message: "QCM:", qcms } );

};

// ➤ Modification d'un questionnaire (POST)
export const PUT = async (
    request: NextRequest, 
    { params: { id } }: { params: { id: string } 
}) => {
    const body = await request.json();  
    const { title, imageSrc } = body;
    const updatedQcm = await prisma.qCM.update({
        where: { id: parseInt(id) },
        data: {
            title: title,
            imageSrc: imageSrc
        }
    })
    return NextResponse.json({ message: "QCM mis à jour avec succès", qcm: updatedQcm });
};


export const DELETE = async (
    request: NextRequest, 
    { params: { id } }: { params: { id: string } 
}) => {
    const updatedQcm = await prisma.qCM.delete({
        where: { id: parseInt(id) }
    })
    return NextResponse.json({ message: "QCM supprimé avec succès", qcm: updatedQcm });
};
