import React from 'react'
import { skills } from '../../data/skills'
import * as Icons from 'lucide-react'
import FadeIn from '../animations/FadeIn'

const Skills = () => {

  const skillCategories = {
    'Backend e Banco de Dados': [
      skills.find(skill => skill.name === '.NET'),
      skills.find(skill => skill.name === 'ASP.NET'),
      skills.find(skill => skill.name === 'REST APIs'),
      skills.find(skill => skill.name === 'PostgreSQL'),
      skills.find(skill => skill.name === 'Mysql'),
      skills.find(skill => skill.name === 'MongoDb')
    ].filter(Boolean),
    'Frontend': [
      skills.find(skill => skill.name === 'React.js'),
      skills.find(skill => skill.name === 'Tailwind'),
      skills.find(skill => skill.name === 'JavaScript'),
      skills.find(skill => skill.name === 'HTML'),
      skills.find(skill => skill.name === 'CSS')
    ].filter(Boolean),
    'Ferramentas e Outros': [
      skills.find(skill => skill.name === 'Git e GitHUb'),
      skills.find(skill => skill.name === 'Figma'),
      skills.find(skill => skill.name === 'Canva'),
      skills.find(skill => skill.name === 'MS PowerPoint'),
      skills.find(skill => skill.name === 'MS Excel'),
      skills.find(skill => skill.name === 'MS Word')
    ].filter(Boolean)

  }

  const getProficiencyLevel = (level) => {
    const levels = {
      'Iniciante': 40,
      'Intermediário': 65,
      'Avançado': 80
    }
    return levels[level] || 0
  }

  const getLevelColor = (level) => {
    const colors = {
      'Iniciante': 'text-[#8dff69] bg-[#8dff69]/20 border-[#8dff69]/30',
      'Intermediário': 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',
      'Avançado': 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30'
    }
    return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30'
  }

  return (
    <div>Skills</div>
  )
}

export default Skills