'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // ScrollTrigger 가져오기

// ScrollTrigger를 GSAP에 등록
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const firstRef = useRef<HTMLDivElement>(null)
  const secondRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // ScrollTrigger를 사용하여 스크롤 애니메이션 만들기
    gsap.to(firstRef.current, {
      scrollTrigger: {
        trigger: firstRef.current,
        start: 'top center', // 시작 위치 설정
        end: 'bottom 150px', // 끝나는 위치 설정
        pin: '#red-content',
      },
    })

    gsap.to(secondRef.current, {
      scrollTrigger: {
        trigger: secondRef.current,
        start: 'top center', // 시작 위치 설정
        end: '+=300', // 끝나는 위치 설정
        pin: '#yellow-content',
      },
    })
  }, [])

  return (
    <main className='mg-0 p-0 box-border'>
      <section className='w-full h-[120vh] overflow-hidden'>
        <div className=' w-[110vw] h-[120vh] box-border'>
          <div className='flex flex-col items-center justify-center w-full h-1/2'>
            <div className='text-white text-3xl font-extrabold w-full h-full flex flex-col justify-center items-center'>
              <span>기술과 데이터로</span>
              <span>이동의 문제를 해결합니다.</span>
            </div>
            <img
              src='/images/tech-bg.png'
              className='w-[100vw] h-[120vh] absolute top-0 bottom-0 right-0 left-0 -z-10'
            />
          </div>
        </div>
      </section>
      <div ref={firstRef} className=' w-[110vw] h-[120vh] bg-red-500'>
        <div id='red-content'>두번째 컨텐트</div>
      </div>
      <div ref={secondRef} className=' w-[110vw] h-[120vh] bg-yellow-500'>
        <div id='yellow-content'>세번째 컨텐트</div>
      </div>
    </main>
  )
}
