import { NextResponse } from 'next/server';
import { PROPERTIES } from '@/lib/properties-data';

export async function GET() {
    try {
        return NextResponse.json(PROPERTIES);
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch properties' },
            { status: 500 }
        );
    }
}
