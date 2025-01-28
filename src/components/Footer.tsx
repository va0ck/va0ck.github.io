/* 
    This is super evil footer.
    I could update every year manually.
    But like... Why not automatically lol.
*/

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return <>
        <br/><br/>
        <footer className="z-50 flex justify-center fixed inset-x-0 bottom-0 p-2 bg-gray-800">
            <p className="text-xs">@{currentYear} Va0ck</p>
        </footer>
    </>
}

export default Footer