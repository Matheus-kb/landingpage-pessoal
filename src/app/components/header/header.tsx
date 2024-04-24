import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
      <div className="header">
        <div>
        <h1>Hi, i´m Matheus! 👋</h1>
        <h2>Software Developer</h2>
        </div>
        <Image
        src="/eumesmo.jpg"
        alt="Vercel Logo"
        width={325}
        height={310}
        priority
        quality={100}
        />
      </div>
    )
}