import React from 'react'

interface ButtonProps {
    styles: string; 
    text: string; 
  }

const Button = ({ styles, text }: ButtonProps) => {
  return (
    <button 
        type="button"
        className={`py-4 px-6 font-medium text-[18px] bg-gradient-to-tr from-cyan-700 to-cyan-200 outline-none hover:from-cyan-800 hover:to-cyan-300 hover:text-white ${styles} rounded-[10px]`}
    >
        {text}
    </button>
  )
}

export default Button