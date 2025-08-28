export async function GET() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();    
    return new Response(JSON.stringify({message: `This is users v2 route handler`,users}), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}