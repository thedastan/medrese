import Image from 'next/image'
import People from "/pages/img/people.png"


export default function index__hero() {
    return (
        <section id="hero">
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

                    <div className="flex mt-12">
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
        </section>
    )
}