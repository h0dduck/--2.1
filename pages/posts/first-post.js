import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h3>
        Hello my name is Hong Jinseo
      </h3>
      <h3>
        My hobby is to play online games and do Sports such as 
        football, basketball etc.
      </h3>
      <h2>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      
    </>
  )
}