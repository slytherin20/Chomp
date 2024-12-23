import Link from "next/link";

export default function NotFound(){
    return <article className="p-16">
        <h1 className="text-2xl b">Not Found</h1>
        <Link href="/">Return Home</Link>
    </article>
}