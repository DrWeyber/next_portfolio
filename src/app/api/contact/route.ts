import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, comment } = data;

  const message = `New request:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${comment}`;

  try {
    await fetch(``);
    return NextResponse.json({ message: 'ok', status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
