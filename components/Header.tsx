import { InsertInput } from './InsertInput'
import { OnePxDivider } from './ui/OnePxDivider'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        What problem should be fixed?
      </p>

      <InsertInput />

      <OnePxDivider />
    </div>
  )
}
