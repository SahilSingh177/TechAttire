import NextHead from "next/head"
import React from "react"

type HeadProps = {
  title?: string
  description?: string | null
  image?: string | null
}

const Head: React.FC<HeadProps> = ({ title, description, image }) => {
  return (
    <NextHead>
      <title>{title} | TechAttire</title>
      <meta itemProp="name" content={title} />
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
      <link rel="icon" href="https://user-images.githubusercontent.com/96344003/197343676-23b757b4-bb5b-4b34-b5f3-36bece4e3b84.png" />
    </NextHead>
  )
}

export default Head
