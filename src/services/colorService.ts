export function RandomColor() {
  const color = ~~(Math.random() * (1 << 24))
  return '#' + color.toString(16)
}
