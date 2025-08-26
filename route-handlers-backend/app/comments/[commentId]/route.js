import { comments } from "@/app/commentData/data";

export async function GET(request, {params}){
    const {commentId} = await params;
    const comment = comments.find(c => c.id === parseInt(commentId));
    if(!comment){
        return new Response(JSON.stringify({message: 'Comment Not Found'}), {
            status: 404,
            headers: {
                'Content-Type': 'application/JSON',
            },
        })
    }   
    return new Response(JSON.stringify(comment), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
    
}


export async function PATCH(request, {params}){
    const {commentId} = await params;
    const commentIndex = comments.findIndex(c => c.id === parseInt(commentId));
    console.log("here is the index",commentIndex);
    if(commentIndex === -1){
        return new Response(JSON.stringify({message: 'Comment Not Found'}), {
            status: 404,
            headers: {
                'Content-Type': 'application/JSON',
            },
        })
    }   
    const {text} = await request.json();
    comments[commentIndex].text = text;

    return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}

export async function DELETE(request, {params}){
    const {commentId} = await params;
    const commentIndex = comments.findIndex(c => c.id === parseInt(commentId));
    console.log("here is the index",commentIndex);
    if(commentIndex === -1){
        return new Response(JSON.stringify({message: 'Comment Not Found'}), {
            status: 404,
            headers: {
                'Content-Type': 'application/JSON',
            },
        })
    }   
    comments.splice(commentIndex, 1);

    return new Response(JSON.stringify({message: 'Comment Deleted Successfully', comments}), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}