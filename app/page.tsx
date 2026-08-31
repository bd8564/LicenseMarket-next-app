import TopBar from "@/components/header/TopBar";
import Navigation from "@/components/header/Navigation/Navigation";
// import ImageCardSlider2 from "@/components/ImageCardProduct2";
// import ProductSlider1 from "@/components/products/ProductSlider1";
import ProductCarousel1 from "@/components/productcarousel/ProductCarousel1";
import ProductCarousel2 from "@/components/productcarousel/ProductCarousel2";


export default function Home() {
  return (
    <div>
      <TopBar />
      <Navigation />
      <ProductCarousel1 />
      {/* <ProductSlider1 /> */}
      {/* <ImageCardProduct2 /> */}
      <ProductCarousel2 />
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="flex flex-col lg:flex-row justify-end gap-2">
//       <a
//         href="https://license-market.ir/product/Grammarly"
//         className="w-[20%] border flex flex-col gap-2"
//       >
//         <div className="relative">
//           <img src="/2.jpg" alt="not show" />
//           <img
//             src="/1.jpg"
//             alt="not show"
//             className="absolute top-0 left-0 opacity-0 hover:opacity-100 "
//           />
//           <span className="absolute top-2 right-2 bg-red-500 rounded-lg px-2 py-1">
//             بعد
//           </span>
//           <span className="absolute top-3 left-3 bg-red-500 rounded-lg">+</span>
//         </div>
//         <span className="text-xs text-right p-2">
//           خرید اکانت گرامرلی Grammarly با ایمیل شما (با 91% تخفیف)
//         </span>
//         <div className="flex justify-between items-center">
//           <span className="">199.000</span>
//           <span className="">
//             <del>1.199.000</del>
//           </span>
//         </div>
//       </a>

//       <a
//         href="https://license-market.ir/product/Udemy"
//         className="w-[20%] border flex flex-col gap-2 "
//       >
//         <div className="relative">
//           <img src="/4.jpg" alt="not show" />
//           <img
//             src="/3.jpg"
//             alt="not show"
//             className="absolute top-0 left-0 opacity-0 hover:opacity-100 "
//           />
//           <span className="absolute top-2 right-2 bg-red-500 rounded-lg px-2 py-1">
//             بعد
//           </span>
//           <span className="absolute top-3 left-3 bg-red-500 rounded-lg">+</span>
//         </div>
//         <span className="text-xs text-right p-2">
//           خرید دوره آموزشی از یودمی Udemy با اکانت شما با 91% تخفیف
//         </span>
//         <div className="flex justify-between items-center">
//           <span className="">499.000</span>
//           <span className="">
//             <del>6.599.000</del>
//           </span>
//         </div>
//       </a>

//       <a
//         href="https://license-market.ir/product/Udemy"
//         className="w-[20%] border flex flex-col gap-2 "
//       >
//         <div className="relative">
//           <img src="/4.jpg" alt="not show" />
//           <img
//             src="/3.jpg"
//             alt="not show"
//             className="absolute top-0 left-0 opacity-0 hover:opacity-100 "
//           />
//           <span className="absolute top-2 right-2 bg-red-500 rounded-lg px-2 py-1">
//             بعد
//           </span>
//           <span className="absolute top-3 left-3 bg-red-500 rounded-lg">+</span>
//         </div>
//         <span className="text-xs text-right p-2">
//           خرید دوره آموزشی از یودمی Udemy با اکانت شما با 91% تخفیف
//         </span>
//         <div className="flex justify-between items-center">
//           <span className="">499.000</span>
//           <span className="">
//             <del>6.599.000</del>
//           </span>
//         </div>
//       </a>

//       <a
//         href="https://license-market.ir/product/Udemy"
//         className="w-[20%] border flex flex-col gap-2 "
//       >
//         <div className="relative">
//           <img src="/4.jpg" alt="not show" />
//           <img
//             src="/3.jpg"
//             alt="not show"
//             className="absolute top-0 left-0 opacity-0 hover:opacity-100 "
//           />
//           <span className="absolute top-2 right-2 bg-red-500 rounded-lg px-2 py-1">
//             بعد
//           </span>
//           <span className="absolute top-3 left-3 bg-red-500 rounded-lg">+</span>
//         </div>
//         <span className="text-xs text-right p-2">
//           خرید دوره آموزشی از یودمی Udemy با اکانت شما با 91% تخفیف
//         </span>
//         <div className="flex justify-between items-center">
//           <span className="">499.000</span>
//           <span className="">
//             <del>6.599.000</del>
//           </span>
//         </div>
//       </a>
//     </div>
//   );
// }
