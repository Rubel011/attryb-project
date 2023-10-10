import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Body() {
  const [slider, setSlider] = useState(Slider | null);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  const cards = [
    {
      title: "",
      text: "",
      image:
        "https://assets.cars24.com/production/c2b-website/231006155227/js/d8e03eca1c5e5bcf4363a9191a0a406b.webp",
    },
    {
      title: "",
      text: "",
      image:
        "https://assets.cars24.com/production/c2b-website/231006155227/js/b826677e31b9d490bc0e9ff5b810e87a.png",
    },
    {
      title: "",
      text: "",
      image:
        "https://assets.cars24.com/production/c2b-website/231006155227/js/add3515cee57c3f3d36023ce13b5c8e2.png",
    },
    {
      title: "",
      text: "",
      image:
        "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/6502b084ef35b.jpg",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"1200px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"2xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>

      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider
        autoplay={true}
        outplayspeed={1000}
        dots
        arrows={false}
        initalslide={1}
        infinite={true}
      >
        <div>
          <img
            src="https://assets.cars24.com/production/c2b-website/231006155227/js/88440a417a25b2afa28eaf1fe1be3d94.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://assets.cars24.com/production/c2b-website/231006155227/js/0780024975b43bbc27de11abe476eeb3.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://assets.cars24.com/production/c2b-website/231006155227/js/05fa29738dae540689da4b0c6347a602.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://fastly-production.24c.in/cars24/b2c/reviews/Mahi_Pawar_1693564541.jpg?w=552"
            alt=""
          />
        </div>
      </Slider>
    </Box>
  );
}
