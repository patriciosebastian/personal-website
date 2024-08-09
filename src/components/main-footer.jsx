import Link from "next/link";

export default function MainFooter() {
  return (
    <div className="w-full">
      <div className="flex justify-evenly items-center mb-12">
        <Link href="/">Home</Link>
        <Link href="/freelance">Freelance</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <small className="block text-center mb-2">Your Web Dev &amp; Friendly Internet Neighbor</small>
      <div className="flex justify-center items-center bg-primary h-[1px] content-none"><small className="block text-center bg-background px-1">&copy; 2024</small></div>
      <div className="text-center text-[2.3rem] text-nowrap tracking-[-2px]">PATRICIO SALAZAR</div>
    </div>
  );
}