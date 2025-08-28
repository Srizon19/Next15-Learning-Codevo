export const dynamic = 'force-static';
export const revalidate = 10; // seconds

export async function GET(){
    return new Response(JSON.stringify({time: new Date().toISOString()}), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })  
}