import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Power BI blog and other data related stuff</h2>
        </Link>
      </div>
    </header>
  )
}
