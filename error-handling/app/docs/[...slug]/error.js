"use client"
import { startTransition } from 'react';
import {useRouter} from 'next/navigation';
import React from 'react';

const ErrorBoundary = ({error,reset}) => {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
  return (
    <div>
        <div>{error.message}</div>
        <button onClick={()=>{reload()}}>Try Again</button>
    </div>
  )
}

export default ErrorBoundary