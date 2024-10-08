import { BoltSolid } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"


const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            className="text-3xl leading-10 text-white font-bold"
          >
            Our new stock is coming out!
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-10 text-ui-bg-base-hover font-normal"
          >
            Get ready and buy preorder.
          </Heading>
        </span>
        <a
          href="/store"
          target="_blank"
        >
          <Button variant="secondary">
            Check our style
            <BoltSolid />
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src="https://tiny.pl/16zyctqj" alt="Obrazek z Discorda" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Hero
