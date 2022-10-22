import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="bg-amber-100 w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <h3 className="text-2xl-semi">Establish your shop</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Contact with us if you want to show your products here.</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[38%] small:aspect-[34/38]">
          <Image
            src="https://user-images.githubusercontent.com/96344003/197348109-49e68c43-f8e4-483a-8682-b7b3af4bc4f5.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
