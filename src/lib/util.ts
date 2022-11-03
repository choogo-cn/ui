export function cls(...args: Array<string>) {
  return args.filter(item => item?.trim()).join(' ')
}
