import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const formData = await req.formData();
    const email = formData.get('email');
    const whatsapp = formData.get('whatsapp');
    const interest = formData.get('interest');
    const other = formData.get('other');

    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // Aquí podrías integrar Google Sheets, Notion o base de datos
    console.log('Nuevo lead recibido:', { email, whatsapp, interest, other });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error en /api/lead:', err);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}