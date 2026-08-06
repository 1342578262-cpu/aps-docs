export default function publicAssetsPlugin(md) {
  const fallback = md.renderer.rules.image
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const src = tokens[idx].attrGet('src') || ''
    if (src.startsWith('public/')) {
      tokens[idx].attrSet('src', `/${src.slice('public/'.length)}`)
    }
    return fallback
      ? fallback(tokens, idx, options, env, self)
      : self.renderToken(tokens, idx, options)
  }
}
