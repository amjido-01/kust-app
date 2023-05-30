import React from 'react'
import { useState } from 'react'

export const playGround = () => {
    const [selectecdFaculty, setSelectedFaculty] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("")
    const [selectLevel, setSelectedLevel] = useState("")

    const faculties = ["fac", "fag", "fan"]
    const department = {
        fac: ["math", "ict", "csc"],
        fag: ["math", "ict", "csc"],
        fan: ["math", "ict", "csc"]
    }
    
  return (
    <div>

    </div>
  )
}
