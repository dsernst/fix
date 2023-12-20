export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        What problem should be fixed?
      </p>

      {/* 1px divider */}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  )
}
