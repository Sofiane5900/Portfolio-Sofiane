import React from 'react'

export default function Title({text,className}:{text:string,className?:string}) {
  return (
    <div className={className}>
        {text}
        
    </div>
  )
}
