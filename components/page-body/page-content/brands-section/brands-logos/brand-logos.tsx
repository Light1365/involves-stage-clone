"use client";

import Image from "next/image";

export interface BrandsLogosInterface {
  src?: any;
  src2?: any;
}

const BrandsLogosContent = ({ src, src2 }: BrandsLogosInterface) => {
  return (
    <div>
    
      {src2 && (
        <div>
          <Image
            alt="company-image"
            src={src2}
            width={500}
            height={500}
            className="w-20 h-20 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default BrandsLogosContent;
