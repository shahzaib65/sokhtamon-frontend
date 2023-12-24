import React from "react";
import Footer from "../Footer/footer";
const Ads = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 6,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 7,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 8,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  
  ];

  return (
    <div className=" bg-white">
      <div className="mx-auto max-w-2xl px-4 lg:py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-0 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="lg:h-80 border border-gray rounded-md flex flex-col"
            >
              <div className=" rounded-tl-md rounded-tr-md overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-contain lg:h-[200px] lg:w-full"
                />
              </div>

              <div className=" flex justify-center">
                <p className=" py-2 font-roboto font-bold text-base text-black">
                  {product.name}
                </p>
              </div>

              <div className=" flex justify-center">
                <p className=" mx-2 font-roboto font-normal text-[10px] text-gray">
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </p>
              </div>

              <div className=" flex flex-row justify-center mt-3 space-x-1">
                <p className=" text-secondary font-roboto font-semibold text-sm">
                  Somoni :
                </p>
                <p className=" text-black font-roboto font-bold text-sm">
                  1199
                </p>
              </div>

              <div className=" flex flex-row justify-center py-2 space-x-1">
                <p className=" text-secondary font-roboto font-bold text-sm">
                  13:12:2023
                </p>
                <p className=" text-gray font-light text-lg -mt-1">|</p>
                <p className=" text-black font-roboto font-bold text-sm">
                  12:30 PM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Ads;

