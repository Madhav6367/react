 import React from 'react'
import BComponent from './BComponent'
import DataContext from './DataContext'

const AComponent = () => {
    const VesiYatNama="Mera Grand Children ko 4 rupee Mele m jaane k sta hu"
  return (
    <DataContext.Provider value={VesiYatNama}>
    <div>
      AComponent
    <BComponent/>
    </div>
    </DataContext.Provider>
  )
}

export default AComponent
