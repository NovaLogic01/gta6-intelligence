const fs = require('fs')
const path = require('path')

const types = ['activities', 'characters', 'features', 'gameplay', 'locations', 'vehicles']

types.forEach(type => {
  const filePath = path.join('src/app/database', type, '[slug]/page.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  
  // add import
  if (!content.includes("import { constructMetadata } from '@/lib/seo'")) {
    content = content.replace("import type { Metadata } from 'next'", "import type { Metadata } from 'next'\nimport { constructMetadata } from '@/lib/seo'")
  }

  // replace generateMetadata
  const regex = /export function generateMetadata\({ params }: \{ params: \{ slug: string \} \}\): Metadata \{\s+const item = [a-z]+\.find\(i => i\.slug === params\.slug\)\s+if \(!item\) return \{ title: 'Not Found' \}\s+return \{\s+title: `\$\{item\.name\}.*`,\s+description: item\.description,\s+\}\s+\}/g;
  
  const replacer = `export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = ${type}.find(i => i.slug === params.slug)
  if (!item) return { title: 'Not Found' }
  
  return constructMetadata({
    title: \`\${item.name} | WITCHWAY Intelligence\`,
    description: item.description,
    url: \`/database/${type}/\${item.slug}\`,
    type: 'profile',
    keywords: [item.name, '${type}', 'GTA VI'],
  })
}`
  
  content = content.replace(regex, replacer)
  fs.writeFileSync(filePath, content)
})
