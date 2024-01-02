import { useEffect,useState } from 'react'
import logo from "../../src/assets/logo.png"
import { Link } from 'react-router-dom';
const navigation = [
  
  
  { name: 'About Us', link: '/about'},
  { name: 'Services', link: '/service' },
  {name: 'Cities'},
  {name: 'Login',link: '/login'},
  { name: 'Contact Us', link: '/contact' }
 
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
            <div className="flex flex-shrink-0 items-center">
                 <Link to="/">
                 <img
                    className="h-[40px] w-auto ml-8"
                    src={logo}
                    alt="Your Company"
                  />
                 </Link>
                </div>

                <div className="flex space-x-4">
                    {navigation.map((item) => (
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
