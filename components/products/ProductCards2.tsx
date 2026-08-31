import Image from "next/image";

type ProductCardProps = {
  src: string;
  title: string;
  price: string;
};

const ProductCard = ({
  src,
  title,
  price,
}: ProductCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">

      <Image
        src={src}
        alt={title}
        width={300}
        height={200}
        className="w-full h-auto object-contain"
      />

      <div className="flex justify-between items-center p-4">
        <h3 className="font-bold">{title}</h3>

        <p className="text-gray-600">{price}</p>
      </div>

    </div>
  );
};

export default ProductCard;