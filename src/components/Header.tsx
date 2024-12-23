import Link from "next/link";

export default function Header(){
    return   <header className="h-10 w-full p-2 shadow z-10 fixed bg-white" data-testid="header">
    <Link href="/">
    <h1 className="text-2xl font-bold">Chomp</h1>

    </Link>
   </header>
}