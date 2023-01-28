import React from 'react'

const Loader = () => {

  return (
    <div className="loader">
        <div className="loader-comp">
            <div className='loader-dots'>. . . .</div>
        </div>
        <div className='loader-mask'></div>
    </div>
  )
}

export default Loader