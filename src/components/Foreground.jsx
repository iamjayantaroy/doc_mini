import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Hi i am a title1",
      fileSize: "5.8mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hi i am a title2",
      fileSize: "9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hi i am a title3",
      fileSize: "1.5mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "geen",
      },
    },
    {
      desc: "Hi i am a title4",
      fileSize: "2mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
    {
      desc: "Hi i am a title5",
      fileSize: "1mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Hi i am a title6",
      fileSize: "3.2mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fiex top-0 left-0 w-full h-full z-[3] flex gap-3 flex-wrap p-5"
      >
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
