import React from 'react'
import list from '../../public/list.json'


const FreeBook = () => {
    const freeBookList = list.filter((data) => data.category === "Free")
    console.log(freeBookList);
  return (
    <div>
      
    </div>
  )
}

export default FreeBook
