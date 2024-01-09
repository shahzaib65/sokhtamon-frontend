import { useEffect,useState } from 'react'
import logo from "../../src/assets/logo.png"
import { Link } from 'react-router-dom';
const navigation1 = [
  { name: 'Главная', link: '/'},
  { name: ' О нас', link: '/about' },
  {name: 'Услуги', link: '/service'},
  { name: 'Контакты', link: '/contact' }
]

const navigation2 = [
 
  { name: 'Вход', link: '/login' },
]



export default function Example() {
  const [isSticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
  <>
     <div className="mx-auto w-full  px-6 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
            <div className="flex flex-shrink-0 items-center ml-0">
                 <Link to="/">
                 <img
                    className="h-[40px] w-auto ml-8"
                    src={logo}
                    alt="Your Company"
                  />
                 </Link>
                 <div className="flex space-x-4 ml-4">
                    {navigation1.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={
                          ' px-3 pt-[14px] text-sm font-roboto font-normal text-[#64748B]'
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                    {navigation2.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={
                          ' px-3 pt-[14px] text-sm font-roboto font-normal text-[#64748B]'
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
            </div>
          </div>
  </>
  )
}
