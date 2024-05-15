import React from 'react'
import list from '../../public/list.json'
import Card from './Card'


const FreeBook = () => {
    const freeBookList = list.filter((data) => data.category === "Free")
    // console.log(freeBookList);
  return (
    <>
    <div className='container '>

        <div>
            <h3 className='fs-2'>Free products offer</h3>
        </div>
        <div>
            <p className='fs-6 mb-4'>Quickly design and customize responsive most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, </p>
        </div>
        <div className='d-flex flex-wrap'>
            {freeBookList.map((item) => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default FreeBook
