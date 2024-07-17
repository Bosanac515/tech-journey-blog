import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({ weight: 'variable', subsets: ['latin']})
const title = 'Aden\'s Site';
const description = 'This my portfolio';
const links = [
  {title: 'Pokemon', href: '/pokemon'},
  {title: 'Bosatek', href: 'www.bosatek.com'},
  {title: 'Freedom Construction', href: 'www.freedomconstruction.com'},
  {title: 'Rick and Morty', href: '/rick-and-morty'}
];
const SocialLinks = {
  snapchat: '#twitter',
  github: 'https://github.com/Bosanac515',
  instagram: 'https://www.instagram.com/bosanac_010/',
  email: 'mailto:hello@bosatek.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
