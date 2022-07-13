import Head from "next/head";
import { Center, Image, Box } from "@chakra-ui/react";
import { css } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [vw, setVW] = useState(1920);
  const [vh, setVH] = useState(1080);

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
  };

  useEffect(() => {
    setVW(window?.innerWidth);
    setVH(window?.innerHeight);
  }, []);

  const { x, y } = useMousePosition();
  return (
    <Box id="bg">
      <Center height="100vh">
        <Image
          src="/stroke.svg"
          style={{
            transform: `translateX(${(x - vw / 2) / 100}px) translateY(${
              (y - vh / 2) / 100
            }px)`,
          }}
        />
        <Image
          src="/outline.svg"
          style={{
            transform: `translateX(${(x - vh / 2) / 40}px) translateY(${
              (y - vh / 2) / 40
            }px)`,
          }}
        />
        <Image
          src="/degen.svg"
          style={{
            transform: `translateX(${(x - vw / 2) / 80}px) translateY(${
              (y - vh / 2) / 100
            }px)`,
          }}
        />
      </Center>
    </Box>
  );
}

