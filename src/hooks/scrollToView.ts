export const scrollToView = (myRef: any) => myRef &&
  myRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
