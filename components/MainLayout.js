import Image from "next/image";
import Link from "next/link";
import Logo from "../pages/img/logo.svg";
import ProfileIcon from "../pages/img/profile-circle.svg";
import Homeicon from "../pages/img/home.svg";
import NewsIcon from "../pages/img/book.svg";
import AudioIcon from "../pages/img/quranbook.svg";
import VideoIcon from "../pages/img/video-circle.svg";
import DocsIcon from "../pages/img/folder-2.svg";
import TalkIcon from "../pages/img/user-edit.svg";


export default function MainLayout({children}) {
    return (
        <>
            <nav className="fixed z-10 right-0 bg-white shadow flex flex-col justify-center items-end w-44">

                <div className="flex justify-around flex-col text-center  py-4 ">
                    <div className="logo">
                        <Link href={"/"} >
                            <Image src={Logo} alt="" width={'100px'} height={"72px"} className="cursor-pointer  flex justify-center m-auto"/>
                        </Link>

                    </div>

                  <div className="navbar px-4">
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
                      <Link href={"/audios"}>
                          <div className="mb-5 mt-5 ">
                              <Image src={AudioIcon} alt="News" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                              <h3>Куран
                                  mp3  mp4</h3>
                          </div>
                      </Link>
                      <Link href={"/videos"}>
                          <div className="mb-5 mt-5 ">
                              <Image src={VideoIcon} alt="Videos" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                              <h3>Видео</h3>
                          </div>
                      </Link>
                      <Link href={"/docs"}>
                          <div className="mb-5 mt-5 ">
                              <Image src={DocsIcon} alt="Videos" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                              <h3>Документтер</h3>
                          </div>
                      </Link>
                      <Link href={"/lectures"}>
                          <div className="mb-5 mt-5 ">
                              <Image src={TalkIcon} alt="Videos" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                              <h3>Лекциялар</h3>
                          </div>
                      </Link>
                      <Link href={"/docs"}>
                          <div className="mb-5 mt-5 ">
                              <Image src={DocsIcon} alt="Videos" width={'41,67px'} height={"41,61px"} className="cursor-pointer" />
                              <h3>Документтер</h3>
                          </div>
                      </Link>

                  </div>

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