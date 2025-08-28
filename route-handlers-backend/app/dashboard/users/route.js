import { redirect } from "next/navigation";

import { use } from "react";

export async function GET(request){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const {url} = request;
    const {searchParams} = new URL(url);
    const startFrom = parseInt(searchParams.get('startFrom')) || 0;
    if(startFrom === 0){
         redirect('/dashboard/users/v2');
    }
    const userTosend = users.filter(user => user.id >= startFrom);
    
    return new Response(JSON.stringify(userTosend), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}