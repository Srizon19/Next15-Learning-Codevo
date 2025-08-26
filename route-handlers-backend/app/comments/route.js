import {comments} from '../commentData/data';

export async function GET(request){
    console.log("here is the commnets",comments);
    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
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