import { argv } from 'process'
import fs from 'fs'
import { newTemplate } from './template'

const dir = './issues/'
const name = argv[2]

const filename = `${dir}${name.replaceAll(' ', '-')}.md`

if (!fs.existsSync(dir)) fs.mkdirSync(dir) // Make dir if needed
fs.writeFileSync(filename, newTemplate.replace('{Title}', name))

console.log(`✅ Done. Created new: ${filename}`)
