export async function GET() {
    const data = { message: 'Hello, this is the backend route handler!' };
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    });
}
