export const dynamic = 'force-static';
export const revalidate = 10; // seconds

export async function GET(){
    
    // adding multiple headers in the response
    const headers  = new Headers();
    headers.set("Content-Type", "application/JSON");
    headers.append("Set-Cookie", "visited=true; Max-Age=86400");
    headers.append("Set-Cookie", "theme=dark; Max-Age=60");
    
    return new Response(JSON.stringify({time: new Date().toISOString()}), {
        status: 200,
        headers,
    })  
}