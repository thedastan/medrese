import Image from 'next/image'
import People from "/pages/img/people.png"
import MapImg from "/pages/img/map.png"


export default function index__hero() {
    return (
        <section id="hero" className="w-full">
            <div className="container mx-auto">

                <div className="hero-block ">
                    <h1 className="font-bold leading-normal mb-24 shadow-xs  text-6xl text-yellow-600">
                        Куран Нуру Институту
                    </h1>
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold">Последние новости</h3>
                        <button className="bg-white text-yellow-600 rounded-lg py-2 px-2 font-bold">Иш чаралар</button>
                        <button className="bg-yellow-600 text-white rounded-lg py-2 px-2 font-bold">Макалалар</button>
                    </div>
<div className="overflow-y-scroll w-full h-[390px]">
    <div className="flex mt-12 ">
        <Image src={People} alt="" className=""/>

        <div className="bg-[#fff] flex rounded-r-2xl px-2 py-2 ">
            <div className="">
                <h4 className="font-bold w-72 text-lg mb-5 ">
                    Кыргызстандык Мухаммедали
                    Умаров Дүйнөлүк Куран
                    жарышында 3-орунду алды
                </h4>
                <p className="w-[347px] text-base leading-5 mb-5">
                    17-февралда Иран мамлекети уюш-
                    турган Дүйнөлүк Куран жарышында
                    кыргызстандык 22 жаштагы
                    Мухаммедали Умаров
                    3-орунду алды....</p>
                <div>

                    <h6>22-Сентябрь</h6>
                </div>
            </div>
        </div>
    </div>
    <div className="flex mt-12 ">
        <Image src={People} alt="" className=""/>

        <div className="bg-[#fff] flex rounded-r-2xl px-2 py-2 ">
            <div className="">
                <h4 className="font-bold w-72 text-lg mb-5 ">
                    Кыргызстандык Мухаммедали
                    Умаров Дүйнөлүк Куран
                    жарышында 3-орунду алды
                </h4>
                <p className="w-[347px] text-base leading-5 mb-5">
                    17-февралда Иран мамлекети уюш-
                    турган Дүйнөлүк Куран жарышында
                    кыргызстандык 22 жаштагы
                    Мухаммедали Умаров
                    3-орунду алды....</p>
                <div>

                    <h6>22-Сентябрь</h6>
                </div>
            </div>
        </div>
    </div>
</div>


                </div>
                <div className="flex justify-end mr-48 -mt-36   ">
                    <a href="#">
                        <Image src={MapImg} className="mb-5"/>
                        <div className="flex">
                            <h1 className="font-black text-white text-base leading-8	">
                                Дарек

                            </h1>
                            <svg className="ml-2" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.1379 6.5C15.2058 -2.16 2.55846 -2.17 0.616498 6.49C-0.517133 11.57 2.59789 15.88 5.3186 18.54C7.30985 20.48 10.4446 20.48 12.426 18.54C15.1565 15.88 18.2716 11.58 17.1379 6.5ZM11.9527 8.31C11.9527 10.0331 10.5757 11.43 8.87714 11.43C7.17854 11.43 5.80155 10.0331 5.80155 8.31C5.80155 6.58687 7.17854 5.19 8.87714 5.19C10.5757 5.19 11.9527 6.58687 11.9527 8.31Z"
                                      fill="white"/>
                            </svg>

                        </div>

                    </a>
                </div>
            </div>
        </section>
    )
}