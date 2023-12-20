'use client'

import { useState } from 'react'
import { Input } from './ui/Input'
import { createClient } from '@/utils/supabase/client'

export const InsertInput = () => {
  const [value, setValue] = useState<string>('')
  const supabase = createClient()
  return (
    <Input
      {...{ value }}
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={async (event) => {
        if (event.key === 'Enter') {
          const { data, error } = await supabase
            .from('notes')
            .insert([{ title: value }])
            .select()
          if (error) console.error(error)
          console.log('Insert success:', data)
        }
      }}
    />
  )
}
