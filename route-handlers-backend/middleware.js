import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request){
    // custom matcher logic can also be added here
    
    // console.log("middleware is running");
    // console.log("here is the request url",request.url);
    // return NextResponse.redirect(new URL("/time", request.url))
    
    // conditionally redirecting the user
    
    if(request.nextUrl.pathname === '/categories' || request.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.redirect(new URL("/time", request.url));
    }
}

// export const config = {
//     matcher: [
   
//         '/categories',
//         '/dashboard/:path*',
//     ],
// }