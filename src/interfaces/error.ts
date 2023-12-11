export type iIssues = {
  expected : string,
  received:string,
  code:string,
  path:string[],
  message:string
}
export type iErrorDetails = {
  issues : iIssues[],
  name:string
}
