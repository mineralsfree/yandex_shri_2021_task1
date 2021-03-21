import React from 'react'

export const Yellow = () => {
  return (<>
    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160.4859 166.514) rotate(0) scale(163.486)">
      <stop offset="0.71875" stop-color="#FFA300"/>
      <stop offset="1" stop-color="#5B3A00"/>
    </radialGradient>
  </>)
}
export const Brown = () => {
  return (<>
      <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(163.22 164.24) rotate(90) scale(163.486)">
        <stop offset="0.729167" stop-color="#633F00"/>
        <stop offset="1" stop-color="#0F0900"/>
      </radialGradient>
      <filter xmlns="http://www.w3.org/2000/svg" id="filter1"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.575 0 0 0 0 0.365803 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.791667 0 0 0 0 0.504028 0 0 0 0 0 0 0 0 0.9 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha"/>
        <feOffset dx="-1" dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
      </filter>
    </>
  )
}
export const Grey = ()=>{
  return (<>        <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.67 164.5893924331665) rotate(90) scale(163.486)">
      <stop offset="0.71875" stop-color="#9B9B9B"/>
      <stop offset="1" stop-color="#382900"/>
    </radialGradient>

      <filter xmlns="http://www.w3.org/2000/svg" id="filter2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0 0.545833 0 0 0 0.9 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1" dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
      </filter>
    </>
    )
}
export const DarkGrey = ()=>{
  return (<>

    <radialGradient xmlns="http://www.w3.org/2000/svg" id="paint3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.486 164.514) rotate(90) scale(163.486)">
      <stop offset="0.71875" stop-color="#4D4D4D"/>
      <stop offset="1" stop-color="#382900"/>
    </radialGradient>
    <filter xmlns="http://www.w3.org/2000/svg" id="filter3"  filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="10"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0.2 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="10"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0.9 0"/>
      <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-1" dy="1"/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
    </filter>

  </>)
}
