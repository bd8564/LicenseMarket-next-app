import Image from "next/image";
import Link from "next/link";
export default function TopBar() {
  return (
    <div className="bg-[#6dd67d] w-full px-4 py-2">
      <Link href="/">
        <div
          className="mx-auto flex max-w-7xl justify-center 
                   items-center gap-2 px-4 py-2 text-xs sm:text-sm
                   flex-row-reverse"
        >
          <Image
            src="/images/telephone.svg"
            alt="phone"
            width={18}
            height={18}
            className="h-4 w-4 sm:h-4 sm:w-4"
          ></Image>
          <span dir="rtl" className="text-white text-sm">
            مرکز تماس مشتریان:
          </span>
          <span dir="ltr" className="text-white text-sm">
            021-91094400
          </span>
        </div>
      </Link>
    </div>
  );
}
