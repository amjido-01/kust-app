import React from 'react'
import { useState } from 'react'

export const PlayGround = () => {
    const [selectecdFaculty, setSelectedFaculty] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("")
    const [selectLevel, setSelectedLevel] = useState("")

    const faculties = ["fac", "fag", "fan"]
    const department = {
        fac: ["math", "ict", "csc"],
        fag: ["ele", "civil", "mech"],
        fan: ["soil", "crop", "animal"]
    }
    const level = {
      math: [100, 200,300],
      math: [100, 200,300],
      math: [100, 200,300]
    }
    
  return (
    <div>

    </div>
  )
}
