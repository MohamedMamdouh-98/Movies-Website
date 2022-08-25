import React from 'react'
import { BsSearch } from 'react-icons/bs';
import './nav.css'

const AppBar = ({searchMovies}) => {
  const onSearch = (word)=>{
    searchMovies(word)

  }
  return (
    <div className="mt-2 nav">
    <BsSearch className='i'/>
    <input type="text" placeholder="بحث" onChange={(e)=>onSearch(e.target.value)} />
    </div>
  )
}

export default AppBar