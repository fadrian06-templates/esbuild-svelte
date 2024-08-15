declare module '*.module.css' {
  const classNames: { [key: string]: string }
  export default classNames
}

declare let isDevelopment: boolean

declare interface LiveReloadChangeEvent {
  added: string[]
  removed: string[]
  updated: string[]
}
