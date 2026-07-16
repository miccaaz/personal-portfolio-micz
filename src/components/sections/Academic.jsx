import React from 'react'
import { courses } from '../../data/courses'
import * as Icons from 'lucide-react'
import FadeIn from '../animations/FadeIn'
import AcademicCard from '../ui/AcademicCard'

const Academic = () => {
  return (
    <section id='academic' className='relative py-15 bg-black overflow-hidden'>
      
      <FadeIn delay={100}>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6'>
            <Icons.Sparkles className='w-4 h-4 text-primary' />
            <span className='text-sm text-primary font-medium'>Meus Cursos</span>
          </div>
          <h2 className='text-4xl lg:text-5xl font-normal text-white leading-tight'>
            Formação Acadêmica e Cursos
          </h2>
        </div>
      </FadeIn>
      <div className='flex text-center justify-center'>
        {courses.map((course, index) => (
        <div
          key={course.id}
          className='w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start'
        >
          <FadeIn delay={150 + (50 * index)}>
            <AcademicCard course={course} />
          </FadeIn>
          
        </div>
      ))}
      </div>
    </section>
  )
}

export default Academic