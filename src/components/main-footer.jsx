import Link from "next/link"

export default function MainFooter() {
  return (
    <div className="max-w-lg lg:max-w-3xl mx-auto">
      <div className="flex justify-center items-center bg-muted-foreground h-px content-none mb-12 text-muted-foreground">
        <small className="block text-center bg-background px-1">&copy; 2025</small>
      </div>
      <div className="flex justify-evenly items-center mb-12">
        <Link href="/">Home</Link>
        <Link href="/freelance">Freelance</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="text-center text-4xl text-nowrap -tracking-[2px] lg:text-start lg:text-[5.5rem] lg:-tracking-[8px]">PATRICIO SALAZAR</div>
    </div>
  );
}