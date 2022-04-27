import React from "react";
import toor from "../public/toor.webp";
import Image from "next/image";

function test() {
  return (
    <>
      <div>test</div>
      <Image alt="toor" src={toor} />
    </>
  );
}

export default test;
