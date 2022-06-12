export const useTitle = (title?: string) => {
  console.log('useTitle')
  document.querySelector('title').innerHTML = title
    ? `${title} · JWC12`
    : 'JWC12'
}
