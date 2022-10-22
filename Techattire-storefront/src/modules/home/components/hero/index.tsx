import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300&family=Quicksand:wght@300&display=swap" rel="stylesheet"/>
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32" style={{fontFamily: 'Quicksand, sans-serif',translate:"0px 3em"}}>
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
         October is here.
        </h1>
        <p className="text-base-regular max-w-[26rem] mb-6 drop-shadow-md shadow-black">
          Check out our latest exclusive hactoberfest collection and use code HACTOBERFEST10 to get 10% off your order this October.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="https://user-images.githubusercontent.com/96344003/197343405-c3de654b-11c1-4a0a-ba10-32b101209c6b.png"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="image"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
