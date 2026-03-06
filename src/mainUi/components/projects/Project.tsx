import React from 'react'

const project = () => {
  return (
    <div className='h-screen'>
      <h1 className='h-[10%]'>project section</h1>
      <div className="grid grid-cols-12 grid-rows-6 gap-5 h-[80%] ">
        <div className="col-span-4 row-span-3 bg-amber-200">1</div>
        <div className="col-span-4 row-span-3 col-start-5 bg-amber-200">2</div>
        <div className="col-span-4 row-span-3 col-start-9 bg-amber-200">3</div>
        <div className="col-span-4 row-span-3 row-start-4 bg-amber-200">4</div>
        <div className="col-span-4 row-span-3 col-start-5 row-start-4 bg-amber-200">5</div>
        <div className="col-span-4 row-span-3 col-start-9 row-start-4 bg-amber-200">6</div>
      </div>
    </div>
  )
}

export default project
