import Link from "next/link";

export default function MainFooter() {
  return (
    <div className="max-w-lg lg:max-w-3xl mx-auto">
      <div className="flex justify-evenly items-center mb-12">
        <Link href="/">Home</Link>
        <Link href="/freelance">Freelance</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <small className="block text-center mb-2 text-muted-foreground">Your Web Dev Internet Neighbor</small>
      <div className="flex justify-center items-center bg-muted-foreground h-px content-none lg:mb-4 text-muted-foreground">
        <small className="block text-center bg-background px-1">&copy; 2024</small>
      </div>
      <div className="text-center text-[2.3rem] text-nowrap tracking-[-2px] lg:text-5xl lg:leading-10">PATRICIO SALAZAR</div>
    </div>
  );
}