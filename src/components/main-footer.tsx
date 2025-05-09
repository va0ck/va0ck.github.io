/* 
    This is super evil footer.
    I could update every year manually.
    But like... Why not automatically lol.
*/
import { Separator } from "@/components/ui/separator"

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return <>
        <Separator className="my-4" />
        <footer className="z-50 flex justify-center fixed inset-x-0 bottom-0 p-2">
            <p className="text-xs font-semibold italic un">{currentYear} Va0ck</p>
        </footer>
    </>
}