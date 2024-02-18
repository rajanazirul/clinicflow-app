import { NextResponse } from "next/server";

export function GET(_: any, response: any) {
    const {id} = response.params;
    return NextResponse.json({ message: `Hello, ${id}!` });
}