import { NextRequest, NextResponse } from 'next/server';
import { PROPERTIES } from '@/features/properties';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = await params;
        const propertyId = parseInt(id);
        const property = PROPERTIES.find((p) => p.id === propertyId);

        if (!property) {
            return NextResponse.json(
                { error: 'Property not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(property);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch property' },
            { status: 500 }
        );
    }
}
