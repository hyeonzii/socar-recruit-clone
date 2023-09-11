'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // ScrollTrigger 가져오기

// ScrollTrigger를 GSAP에 등록
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const redRef = useRef<HTMLDivElement>(null)
  const yellowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // ScrollTrigger를 사용하여 스크롤 애니메이션 만들기
    gsap.to(redRef.current, {
      scrollTrigger: {
        trigger: redRef.current,
        start: 'top top', // 시작 위치 설정
        end: 'bottom 150px', // 끝나는 위치 설정
        pin: '#red-content',
      },
    })

    gsap.to(yellowRef.current, {
      scrollTrigger: {
        trigger: yellowRef.current,
        start: 'top center', // 시작 위치 설정
        end: '+=500', // 끝나는 위치 설정
        pin: '#yellow-content',
      },
    })
  }, [])

  return (
    <main className='mg-0 p-0 box-border'>
      <section className='w-full h-[120vh] overflow-hidden'>
        <div className=' w-[110vw] h-[120vh] box-border'>
          <div className='relative'>
            <img
              src='/images/tech-bg.png'
              className='w-full h-[120vh] absolute top-0 bottom-0 right-0 left-0'
            />
            <div className='text-white text-bold-extra absolute top-0 bottom-0 right-0 left-0 '>
              ㅇㅇㅇㅇㅇ
            </div>
          </div>
        </div>
      </section>
      <div ref={redRef} className=' w-[110vw] h-[120vh] bg-red-500'>
        <div id='red-content'>두번째 컨텐트</div>
      </div>
      <div ref={yellowRef} className=' w-[110vw] h-[120vh] bg-yellow-500'>
        <div id='yellow-content'>세번째 컨텐트</div>
      </div>
    </main>
  )
}
