import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Gavin Clark - Blog Posts about Power BI and other data stuff</h2>
        </Link>
      </div>
    </header>
  )
}
