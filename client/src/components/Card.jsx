import React from 'react'
import { download } from '../assets'
import { downloadImage } from '../utils'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="card">
      <img className='card-img' src={photo} alt={prompt} />
      <div>
        <p>{prompt}</p>

        <div>
          <div>
            {/* <div>
              {name[0]}
            </div> */}
            <p>{name}</p>
          </div>
          <button className='download-btn btn' type="button" onClick={() => downloadImage(_id, photo)}>
            <img src={download} alt="download" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Card