import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import {Button} from "@nextui-org/react";

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Ecommerce Starter Template
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Powered by Medusa and Next.js
          </Heading>
        </span>
        <a
          href="/store" // Zmieniono adres przekierowania
          target="_blank"
        >
          <Button color="primary" variant="shadow">
            Check our style
          </Button>
        </a>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img src="https://cdn.discordapp.com/attachments/1285889428929253386/1285976654602174536/kanapa.png?ex=66ec3a96&is=66eae916&hm=411d0c7fd3d87ccdd67e9cffc94674e4630dc853afbdb307b93298a9f1f002e2&" alt="Obrazek z Discorda" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Hero
