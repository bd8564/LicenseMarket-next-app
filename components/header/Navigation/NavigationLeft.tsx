import Image from "next/image";
import Link from "next/link";
export default function NavigationLeft() {
  return (
    <div
      className="flex justify-center items-center gap-5 
                 flex-row-reverse text-xs sm:text-sm"
    >
      <Link href="#">
        <Image
          src="/images/telephone.svg"
          alt="search-logo"
          width={14}
          height={14}
        ></Image>
      </Link>
      <Link href="#">
        <Image
          src="/images/telephone.svg"
          alt="search-logo"
          width={14}
          height={14}
        ></Image>
      </Link>
      <div className="flex justify-center items-center">
        <Link href="#">
          <span className="text-white">عضویت</span>
        </Link>
        <Image
          src="/images/red-line-vertical.svg"
          alt="line-v"
          width={14}
          height={14}
        ></Image>
        <Link href="#">
          <span className="text-white">وارد شوید</span>
        </Link>
      </div>
    </div>
  );
}
