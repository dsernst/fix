import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export const PreviousEntries = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: problems } = await supabase.from('problems').select()

  if (!problems || !problems.length)
    return <p className="opacity-30">No problems found.</p>

  return (
    <ol className="list-decimal">
      {problems.map(({ title }, index) => (
        <li key={index}>{title}</li>
      ))}
    </ol>
  )
}
