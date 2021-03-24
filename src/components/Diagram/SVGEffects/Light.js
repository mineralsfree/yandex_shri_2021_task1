import React from 'react'

export const LightYellow = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint0_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.8125" stopColor="#FFB800" stopOpacity="0.7"/>
      <stop offset="1" stopColor="#FFEF99" stopOpacity="0.4"/>
    </radialGradient>
  </>)
}
export const LightBrown = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint1_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.8125" stopColor="#FFB800" stopOpacity="0.4"/>
        <stop offset="1" stopColor="#FFEF99" stopOpacity="0.2"/>
      </radialGradient>
    </>
  )
}
export const LightGrey = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint2_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.828125" stopColor="#A6A6A6" stopOpacity="0.69"/>
        <stop offset="0.921875" stopColor="#CBCBCB" stopOpacity="0.2"/>
      </radialGradient>
    </>
  )
}
export const LightDarkGrey = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint3_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.828125" stopColor="#BFBFBF" stopOpacity="0.69"/>
      <stop offset="0.921875" stopColor="#E4E4E4" stopOpacity="0.2"/>
    </radialGradient>

  </>)
}
