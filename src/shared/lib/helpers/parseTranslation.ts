const parseTranslation = (str: string) => {
  if (!str) return []
  const parts = str.split(/(\[.*?:.*?\])/g)

  return parts.map((part) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const [key, text] = part.slice(1, -1).split(':')
      return { key, text, isMatch: true }
    }
    return { text: part, isMatch: false }
  })
}

export default parseTranslation
