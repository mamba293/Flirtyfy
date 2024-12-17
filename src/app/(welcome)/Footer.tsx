import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white-800 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <section className="w-full md:w-1/3 mb-6 md:mb-5">
            <h3 className="text-3xl font-bold mb-6">Обзор</h3>
            <ul className="text-lg">
              <li><Link href="">Блог Flirtify</Link></li>
              <li><Link href="">Помощь</Link></li>
              <li><Link href="">Города</Link></li>
              <li><Link href="">Политика конфиденциальности</Link></li>
              <li><Link href="">Условия использования</Link></li>
              <li><Link href="">Политика cookie</Link></li>
            </ul>
          </section>

          <section className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Flirtify - творческий проект</h3>
            <ul className="text-lg">
              <li><Link href="">О нас</Link></li>
              <li><Link href="">Вакансии</Link></li>
            </ul>
          </section>

          <section className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Язык</h3>
            <select name="language" id="language" className="w-full py-2 px-4 bg-white text-black rounded-xl border border-gray-300">
              <option value="ru">Русский</option>
            </select>
          </section>

          <section className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Подпишись на нас</h3>
            <ul className="flex space-x-4 text-lg">
              <li>
                <Link href="https://www.instagram.com/blck_mamb_/">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    height={60}
                    width={60}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://web.telegram.org/k/">
                  <Image
                    src="/icons/telegram.svg"
                    alt="Telegram"
                    height={60}
                    width={60}
                  />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
