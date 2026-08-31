import Link from "next/link";
import Image from "next/image";
export default function NavigationRight() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="flex justify-center items-center flex-row-reverse gap-5">
        <Link href="#">
          <Image
            src="/images/license-logo.webp"
            alt="license-logo"
            width={48}
            height={48}
            className="h-auto w-8 sm:w-16"
          ></Image>
        </Link>
        <div
          className=" hidden sm:flex gap-5 flex-row-reverse items-center 
                     justify-center text-xs sm:text-sm"
        >
          <Link href="#">
            <span className="text-white rounded-full px-2 py-1 hover:bg-red-500">خانه</span>
          </Link>
          <Link href="#" className="flex gap-2 flex-row-reverse rounded-full px-2 py-1 hover:bg-red-500">
            <span className="text-white"> خدمات ما</span>
            <Image
              src="/images/arrow-left-white.svg"
              alt="arrow-top"
              width={18}
              height={18}
            ></Image>
          </Link>
          <Link href="#">
            <span className="text-white rounded-full px-2 py-1 hover:bg-red-500">وبلاگ</span>
          </Link>
          <Link href="#" className="flex gap-1 flex-row-reverse rounded-full px-2 py-1 hover:bg-red-500">
            <span className="text-white"> درباره ما</span>
            <Image
              src="/images/arrow-left-white.svg"
              alt="arrow-top"
              width={18}
              height={18}
            ></Image>
          </Link>
        </div>
      </div>
      <Link href="#" className="sm:hidden">
        <Image
          src="/images/telephone.svg"
          alt="pic"
          width={48}
          height={48}
          className="h-auto w-8 sm:w-16"
        ></Image>
      </Link>
    </div>
  );
}
