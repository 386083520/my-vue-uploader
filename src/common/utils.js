export function kebabCase (s) {
  return s.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)
}
