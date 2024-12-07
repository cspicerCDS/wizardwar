export default function imageLoader({ src }) {
  const basePath = process.env.NODE_ENV === 'production' ? '/ww' : ''
  return `${basePath}${src}`
} 