import React from 'react'

const AcademicCard = ({course}) => {
  const { title, institution, period, description } = course;
  return (
    <div>
      <h3>{title}</h3>
      <p>{institution}</p>
      <p>{period}</p>
    </div>
  )
}

export default AcademicCard