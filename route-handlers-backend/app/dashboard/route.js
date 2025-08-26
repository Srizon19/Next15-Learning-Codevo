export async function GET(request){
    return new Response(`This is dashboard route handler ${JSON.stringify(request)}`, {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}