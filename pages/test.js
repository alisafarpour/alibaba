import React from "react";
import toor from "../public/toor.webp";
import Image from "next/image";

console.log(toor);
function test() {
  return (
    <>
      <div>test</div>
      <Image src={toor} />
    </>
  );
}

export default test;
