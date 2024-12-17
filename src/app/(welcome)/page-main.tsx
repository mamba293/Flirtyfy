import Image from "next/image";
import Link from "next/link";

export default function PageMain() {
  return (
      <main>
            <section>
                  <div className="bg-cover bg-center" style={{ backgroundImage: "url(./images/bg-mesh.png)"}}>
                        <div className="px-36 ">
                              <div className="relative py-14 px-14 flex items-center gap-16">
                                    <div>
                                          <div>
                                                <h1 className="text-7xl text-red-700 font-bold mb-8">Мы за свидания с
                                                      <br />уверенностью.
                                                </h1>
                                                <span className="block text-2xl text-black leading-relaxed">
                                                      Помогаем тебе быть собой
                                                      <br />
                                                      и наслаждаться свиданиями
                                                </span>
                                          </div>
                                          <div>
                                          <form>
                                                <div className="flex items-center mt-10">
                                                      <div className="bg-black rounded-full px-5 py-5 text-xl">
                                                            <Link href="/auth" className="text-white text-center">Продолжить по email/телефону</Link>
                                                      </div>
                                                </div>
                                                
                                                <div className="text-left mt-6 mb-6 text-2xl">
                                                      или
                                                </div>   

                                                <div className="flex items-center gap-5">
                                                <div className="flex items-center">
                                                      <div className="bg-transparent border border-4px border-black rounded-full px-8 py-2.5 text-xl">
                                                            <Link href="/auth" >
                                                                        <span className="flex items-center gap-4 ">
                                                                              <Image
                                                                                    src="/images/google.png"
                                                                                    alt="google"
                                                                                    width={32}
                                                                                    height={32}
                                                                                    />
                                                                              
                                                                              <span className="mt-1.6">   
                                                                                    Войти через Google
                                                                              </span>

                                                                        </span>
                                                            </Link>
                                                      </div>
                                                </div>
                                                <div className="flex items-center">
                                                      <div className="bg-transparent border border-4px border-black rounded-full px-8 py-2.5 text-xl">
                                                            <Link href="/auth">
                                                                        <span className="flex items-center gap-4">    
                                                                                    <Image
                                                                                    src="/images/facebook.png"
                                                                                    alt="facebook"
                                                                                    width={18}
                                                                                    height={18}
                                                                                    />
                                                                              <span className="mt-1.6">
                                                                                    Войти через Facebook
                                                                              </span>
                                                                        </span>
                                                            </Link>
                                                      </div>
                                                      <div>
                                                            <button>
                                                                  <span>

                                                                  </span>
                                                            </button>
                                                      </div>      
                                                </div>   
                                                </div>

                                          </form>  
                                    </div>
                                    </div>

                                    <div className="hidden 2xl:block">
                                          <div>
                                                <Image
                                                      src="/images/img1.png"
                                                      alt="Love Image"
                                                      width={650}
                                                      height={650}
                                                />
                                          </div>
                                    </div>
                              </div>  
                        </div>
                  </div>

            </section>

            <section>
                  <div className="bg-cover bg-center bg-pink-100">
                        <div className="flex items-center justify-center px-12 py-16 gap-24">
                              {/* Левая часть: Картинка */}
                              <div className="hidden 2xl:block flex-shrink-0 px-8">
                                    <div className="px-8 py-12 rounded-3xl bg-pink-300">
                                    <Image
                                          src="/images/loveis.png"
                                          alt="Image"
                                          width={512}
                                          height={512}
                                    />
                                    </div>
                              </div>

                              {/* Правая часть: Текст и кнопка */}
                              <div className="max-w-lg px-8">
                                    <h3 className="text-4xl font-bold mb-4">
                                    Уверенность – наша цель
                                    </h3>
                                    <p className="text-xl mb-4">
                                    Наши современные технологии помогают бороться с фейками, мошенниками и спамерами, чтобы дать уверенность, что ты общаешься с настоящими людьми.
                                    </p>
                                    <p className="text-xl mb-6">
                                    Наша поддержка и инструменты безопасности помогут тебе быть собой и придадут решительности, чтобы найти значимые и стоящие отношения.
                                    </p>
                                    <div>
                                          <Link href="/auth" className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 text-xl">
                                                Регистрация
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>

            <section className="bg-pink-200 relative">
                  <div className="px-80 mx-12">
                        <div className="flex items-center gap-2 relative overflow-hidden">
                              <div className="flex-1">
                                    <h1 className="text-5xl font-bold my-8">Поболтаем?</h1>
                                    <span className="block my-8 text-2xl">Не хочешь дожидаться взаимной симпатии?</span>
                                    <span className="block mb-8 text-2xl">Перейди сразу к самому интересному –
                                          <br/> более близкому общению, <br/>
                                          где вы сможете узнать друг друга лучше.
                                    </span>
                                    <Link 
                                          href="/auth" 
                                          className="px-6 py-2 bg-white rounded-full hover:bg-gray-100 text-2xl"
                                    >
                                          Регистрация
                                    </Link>
                              </div>
                               <div className="image-block md:-mb-80  hidden 2xl:block flex-shrink-0">
                                    <Image
                                          src="/images/nearby.webp"
                                          alt="Image"
                                          width={400}
                                          height={600}
                                    />
                               </div>
                        </div>
                  </div>
            </section>

      </main>
  );
}

        