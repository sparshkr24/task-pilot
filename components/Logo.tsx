import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opactiy-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo.png"
          alt="Logo" 
          width={125}
          height={125}
        />
      </div>
    </Link>
  );
};
