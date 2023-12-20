import { Logo } from '../components/Logo'
import AuthButton from '../components/AuthButton'
import Header from '@/components/Header'

export default async function Index() {
  return (
    <div className="flex flex-col items-center flex-1 w-full gap-20">
      <nav className="flex justify-center w-full h-16 border-b border-b-foreground/10">
        <div className="flex items-center justify-between w-full max-w-4xl p-3 text-sm">
          <Logo />
          <AuthButton />
        </div>
      </nav>

      <div className="flex flex-col flex-1 max-w-4xl gap-20 px-3 opacity-0 animate-in">
        <Header />
        <main className="flex flex-col flex-1 gap-6">
          <h2 className="mb-4 text-3xl font-bold">Previous Entries:</h2>
        </main>
      </div>

      <footer className="flex justify-center w-full p-8 text-xs text-center border-t text-foreground/20 border-t-foreground/10">
        <p>Do great things</p>
      </footer>
    </div>
  )
}
