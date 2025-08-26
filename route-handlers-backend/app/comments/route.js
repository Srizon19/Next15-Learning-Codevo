import {comments} from '../commentData/data';
import { NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(request){
    const {searchParams} = request.nextUrl;
    // const requestHeaders = new Headers(request.headers);
    const requestHeaders = await headers();
    console.log("here the auth token",requestHeaders.get('Authorization'));
    
    // accessing the cookie from the request header
    const cookieData = request.cookies;
    console.log("here is the cookie data",cookieData.get('sessionId'));
    
    // setting the cookie in the response header
    const cookieStore = await cookies();
    cookieStore.set('theme', 'dark');
    console.log("here is the cookie data",cookieData.get('theme'));
    
    const query = searchParams.get('query') || '';
    const filteredComments = query? comments.filter(c => c.text.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : comments;
    return new Response(JSON.stringify(filteredComments), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
            'set-Cookie': 'sessionId=abc123; Path=/; HttpOnly',
        },
    })  
}


export async function POST(request){
    const {text} = await request.json();
    const newComment = {
        id: comments.length + 1,
        text,
    }
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        status: 201,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}