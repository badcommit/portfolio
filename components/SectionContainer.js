import Bg from "./Welcome";

export default function SectionContainer({ children }) {
  return (
    <div>
      <div className=" xl:px-0">{children}</div>
    </div>
  );
}
