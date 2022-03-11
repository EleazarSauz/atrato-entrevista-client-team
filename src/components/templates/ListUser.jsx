import React from 'react'
import Card from '../organism/Card'

function ListUser() {
  return (
    <div className="flex flex-wrap -m-4">
        {
            [1,2,3,4].map( i => <Card key={i}/> )
        }
    </div>
  )
}

export default ListUser