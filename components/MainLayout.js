import Image from "next/image";
import Link from "next/link";
import Logo from "../pages/img/logo.svg";
import ProfileIcon from "../pages/img/profile-circle.svg";
import Homeicon from "../pages/img/home.svg";
import NewsIcon from "../pages/img/book.svg";


export default function MainLayout({children}) {
    return (
        <>
            <nav className="fixed z-10 right-0 bg-white shadow flex flex-col justify-center items-end w-40">
                <div className="flex justify-around flex-col text-center py-2 px-5">
                    <Link href={"/"}>
                        <Image src={Logo} alt="" width={'100px'} height={"72px"} className="cursor-pointer"/>
                    </Link>
                    <Link href={"/"}>
                        <div className='mb-5 mt-5 ' >
                            <Image src={Homeicon} alt="" width={'41,67px'} height={"41,61px"} className="cursor-pointer "/>
                            <h3 className="cursor-pointer">Главный</h3>
                        </div>
                    </Link>
                    <Link href={"/about"}>
                        <div className="mb-5 mt-5 ">
                            <Image src={ProfileIcon} alt="" width={'41,67px'} height={"41,61px"} className="cursor-pointer"/>
                            <h3 className="cursor-pointer">О нас</h3>
                        </div>
                    </Link>
                    <Link href={"/news"}>
                        <div className="mb-5 mt-5 ">
                            <Image src={NewsIcon} alt="News" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                            <h3>Макалалар</h3>
                        </div>
                    </Link>
                </div>

            </nav>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}