import Counter from "./counter";


export const metadata = {
    title: "Counter Page",
        
    description: "A simple counter page using React hooks",
};


export default function CounterPage() {
    

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
            
            <Counter></Counter>
        </main>
    );
}