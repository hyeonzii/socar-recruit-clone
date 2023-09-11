'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // ScrollTrigger 가져오기

// ScrollTrigger를 GSAP에 등록
gsap.registerPlugin(ScrollTrigger)

export default function SocarUniverse() {
  return <main className='mg-0 p-0 box-border'>쏘카 유니버스 페이지</main>
}
