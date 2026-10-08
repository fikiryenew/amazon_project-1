import React from 'react'
import { categoryInfos } from './catagoryFullInfos'
import Categorycard from './Categorycard'
import classes from './catagory.module.css'

function Category() {
  return (
    
      <section className={classes.category__container}>
        {
          categoryInfos.map((infos)=>(
            <Categorycard key={infos.name} data={infos} />
           // < Categorycard data ={infos} />
          ))
        }
      </section>
    
  )
}

export default Category
