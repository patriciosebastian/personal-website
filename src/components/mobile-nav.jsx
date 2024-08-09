import Link from 'next/link'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'

export default function MobileNav() {
  return (
    <div className="sticky top-2">
      <Menubar className="justify-center">
        <MenubarMenu>
          <MenubarTrigger><Link href="/">Home</Link></MenubarTrigger>
          <MenubarTrigger><Link href="/freelance">Freelance</Link></MenubarTrigger>
          <MenubarTrigger><Link href="/blog">Blog</Link></MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}