import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export const PreviousEntries = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()

  if (!notes) return <p>No notes found</p>

  return (
    <ol className="list-decimal">
      {notes.map((note, index) => (
        <li key={index}>{note.title}</li>
      ))}
    </ol>
  )
}
