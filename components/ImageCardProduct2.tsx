import Image from "next/image";

type ImageCardProps = {
  src: string;
};

const ImageCardProduct2 = ({ src }: ImageCardProps) => {
  return (
    <div className="shrink-0">
      <Image
        src={src}
        alt="image"
        width={180}
        height={120}
        className="rounded-lg object-cover"
      />
    </div>
  );
};

export default ImageCardProduct2;