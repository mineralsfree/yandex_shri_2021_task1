import React from 'react'

export const LightYellow = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint0_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#FFEF99" stop-opacity="0.4"/>
    </radialGradient>
  </>)
}
export const LightBrown = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint1_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.8125" stop-color="#FFB800" stop-opacity="0.4"/>
        <stop offset="1" stop-color="#FFEF99" stop-opacity="0.2"/>
      </radialGradient>
    </>
  )
}
export const LightGrey = ({size}) => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint2_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform={`translate(${size} ${size}) scale(${size})`}>
        <stop offset="0.828125" stop-color="#A6A6A6" stop-opacity="0.69"/>
        <stop offset="0.921875" stop-color="#CBCBCB" stop-opacity="0.2"/>
      </radialGradient>
    </>
  )
}
export const LightDarkGrey = ({size}) => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint3_light" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform={`translate(${size} ${size}) scale(${size})`}>
      <stop offset="0.828125" stop-color="#BFBFBF" stop-opacity="0.69"/>
      <stop offset="0.921875" stop-color="#E4E4E4" stop-opacity="0.2"/>
    </radialGradient>

  </>)
}
