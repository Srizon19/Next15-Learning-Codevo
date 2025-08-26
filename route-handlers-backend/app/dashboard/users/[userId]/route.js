export async function GET(request, {params}){
    const {userId} = await params;
    const {url} =  request;
    const {searchParams} = new URL(url);
    const hello = searchParams.get('hello') || 'no-hello';
  
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    
    console.log(user);
    return new Response(JSON.stringify({message: `This is user route handler ${JSON.stringify(request)}`, user:user === '{}'? "": user , status: user==='{}'? 'found' : 'not found'}), {
        status: 200,
        headers: {
            'Content-Type': 'application/JSON',
        },
    })
}