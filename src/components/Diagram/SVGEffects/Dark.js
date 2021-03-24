import React from 'react'

export const Yellow = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.71875" stopColor="#FFA300"/>
      <stop offset="1" stopColor="#5B3A00"/>
    </radialGradient>
  </>)
}
export const Brown = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.729167" stopColor="#633F00"/>
        <stop offset="1" stopColor="#0F0900"/>
      </radialGradient>
    </>
  )
}
export const Grey = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.71875" stopColor="#9B9B9B"/>
        <stop offset="1" stopColor="#382900"/>
      </radialGradient>
    </>
  )
}
export const DarkGrey = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.71875" stopColor="#4D4D4D"/>
      <stop offset="1" stopColor="#382900"/>
    </radialGradient>

  </>)
}
