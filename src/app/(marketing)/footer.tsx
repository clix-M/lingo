import { Button } from "@/components/ui/button";
import Image from "next/image";

const flags = [
    { src: '/hr.svg' ,  alt: 'Croatian' },
    { src: '/es.svg' ,  alt: 'Spanish' },
    { src: '/fr.svg' ,  alt: 'French' },
    { src: '/it.svg' ,  alt: 'Italian' },
    { src: '/jp.svg' ,  alt: 'Japanese' },
]

const Footer = () => {
    return ( 
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                {flags.map((flag)=> (
                    <Button className="w-full" size={'lg'} variant={'ghost'} key={flag.alt}>
                        <Image src={flag.src} alt={flag.alt} height={32} width={40} className="mr-4 rounded-md" />
                        {flag.alt}
                    </Button>
                ))}
            </div>
        </footer>
     );
}
 
export default Footer;