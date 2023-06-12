"use client ";
import React from 'react'
import { IconType } from 'react-icons/lib'

interface ButtonProps {
    label:string
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
    disabled?:boolean
    outline?:boolean
    small?:boolean
    icon?:IconType
}
const Button:React.FC<ButtonProps> = ({label,onClick,disabled,outline,small,icon:Icon} ) => {
  return (
 <button  className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outline ?"bg-white":"bg-rose-500"}  ${outline?"border-black" : "bg-rose-500"} ${outline?"text-black":"text-white"} ${small?"text-sm":"text-md"} ${small?"py-1":"py-2"} ${small ?"font-light":"font-semibold"} ${small?"border-[1px]":"border-2"}`}
 onClick={onClick
}
disabled={disabled}
 >
    {Icon && (
        <Icon className='absolute left-4 top-3' size={24}/>
    )}
    {label}</button>
  )
}

export default Button
