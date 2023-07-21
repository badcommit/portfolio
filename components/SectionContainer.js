import Bg from '../pages/welcome'

export default function SectionContainer({ children }) {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
    </div>
  )
}
