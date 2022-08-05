import Head from "next/head";
import { Link, Center, Image, Box } from "@chakra-ui/react";
import { css } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>degeneroach#8635 does web3</title>
      </Head>
      <iframe
        src="https://my.spline.design/weirdbubblecopy-ff12ca495978a97af42c63d33022c602/"
        frameborder="0"
        width="100%"
        height="100%"
        style={{
          position: `absolute`,
          width: `100%`,
          height: `100%`,
          zIndex: `1`,
        }}
      ></iframe>
      <Link href="https://twitter.com/degeneroach/">
        <Box id="bg">
          <Center height="100vh">
            <Image src="/stroke.svg" style={{ zIndex: `2` }} />
            <Image src="/outline.svg" style={{ zIndex: `2` }} />
            <Image
              src="/degen.svg"
              style={{ zIndex: `2`, paddingTop: `100px` }}
            />
          </Center>
        </Box>
      </Link>
    </>
  );
}
