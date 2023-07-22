import react, { useCallback, useEffect, useMemo, useState } from "react";

const bgColors = ["#e4b388", "#47a5aa", "#cccccc", "#5c86f9"];
const fontColors = ["#fff685", "#000000", "#ff1d58", "#ffffff"];
const text = [
  "Will recession ever happen?",
  "Does twitter become less censored?",
  "Will OpenAI be open again?",
  "The gamble of safe AI",
  "",
];
const basicWidth = 2;
const Text = ({ index, backgroundColor, finishedCallback }) => {
  const [cursor, setCursor] = useState(0);
  const empty = 3;
  const textLen = text[index].length;
  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((cursor + 1) % (textLen + empty));
      if (cursor === textLen + empty - 1) {
        finishedCallback();
      }
    }, 100);
    return () => clearInterval(interval);
  });

  const spans = useMemo(() => {
    return text[index].split("").map((c, i) => {
      return (
        <span
          key={i}
          style={{
            fontWeight: "bolder",
            fontSize: 50,
            width: basicWidth + "rem",
            visibility: i < cursor ? "visible" : "hidden",
          }}
        >
          {c}
        </span>
      );
    });
  }, [cursor, index]);

  const dot = (
    <span
      style={{
        fontWeight: "bolder",
        fontSize: 50,
        left: cursor * basicWidth - basicWidth + "rem",
        backgroundColor: fontColors[index],
      }}
      className={"dot absolute"}
    ></span>
  );
  return (
    <div className={"flex flex-row"}>
      {dot}
      <div>{spans}</div>
    </div>
  );
};
const Bg = () => {
  const [index, setIndex] = useState(0);
  const finishedCallback = () => {
    setIndex((index + 1) % bgColors.length);
  };
  const textComponent = (
    <Text index={index} finishedCallback={finishedCallback} />
  );
  const color = bgColors[index];

  return (
    <div
      className={"welcome top-0 flex h-screen w-screen flex-col justify-center"}
      style={{ backgroundColor: color, color: fontColors[index] }}
    >
      <div
        style={{
          position: "absolute",
          left:
            "calc(50% - calc(" +
            (text[index].length * basicWidth) / 2 +
            "rem))",
        }}
      >
        {textComponent}
      </div>
    </div>
  );
};

const HorizonMove = ({ component, textLen }) => {};

export default Bg;
