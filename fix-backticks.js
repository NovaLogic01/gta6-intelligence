const fs = require('fs')
const path = require('path')
const glob = require('glob')

// We will use a simple regex replacing `\`` with `\`` but wait, if it's literally backslash backtick, that's `\\\`` in regex.
const files = [
  'src/app/changes/page.tsx',
  'src/app/explore/page.tsx',
  'src/app/news/[slug]/page.tsx',
  'src/app/share/[type]/[slug]/page.tsx',
  'src/app/timeline/page.tsx',
  'src/components/ui/DiscoveryQueue.tsx',
  'src/app/trailers/page.tsx',
  'src/components/ui/EntityDossier.tsx'
]

files.forEach(f => {
  const p = path.join(process.cwd(), f)
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8')
    content = content.replace(/\\`/g, '`')
    content = content.replace(/\\\$/g, '$')
    fs.writeFileSync(p, content, 'utf8')
    console.log('Fixed', f)
  }
})
