import React from 'react'

export default function InformationalLayout({header, text}) {
  return (
    <>
    <h2 className="text-2xl font-extrabold">{header}</h2>
    <p className="font-bold">{text}</p>
    </>
  )
}
