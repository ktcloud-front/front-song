import React from 'react'
import './text.css'
import { TextProps } from './Text.types'

export const Text: React.FC<TextProps> = ({ variant = 'p', text }) => {
  const Tag = variant // 'h1', 'p', 'span' 등으로 설정

  return <Tag>{text}</Tag>
}