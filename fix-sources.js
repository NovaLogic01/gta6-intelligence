const fs = require('fs')
const path = require('path')

const articlesPath = path.join(__dirname, 'src/data/articles.ts')
let content = fs.readFileSync(articlesPath, 'utf8')

// Replace sourceId: "ign" with "gamer-guides" where sourceUrl contains gamerguides.com
content = content.replace(/"sourceId":\s*"ign",\s*"sourceUrl":\s*"https:\/\/www\.gamerguides\.com/g, '"sourceId": "gamer-guides",\n    "sourceUrl": "https://www.gamerguides.com')

fs.writeFileSync(articlesPath, content, 'utf8')
console.log('Fixed gamer-guides source IDs in articles.ts')

const charPath = path.join(__dirname, 'src/data/characters.ts')
if (fs.existsSync(charPath)) {
  let charContent = fs.readFileSync(charPath, 'utf8')
  charContent = charContent.replace(/'ign',\s*'rockstar-newswire'/, "'gamer-guides', 'rockstar-newswire'")
  fs.writeFileSync(charPath, charContent, 'utf8')
  console.log('Fixed characters.ts')
}
