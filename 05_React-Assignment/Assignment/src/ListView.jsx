import { Table } from 'reactstrap'
import React from 'react'
export default function ListView() {
  let ListData = [
        { text: 'Do Meditation'},
        { text: 'Go Jogging'},
        { text: 'Buy Groceries'},
        { text: 'Pay Phone bill' },
        { text: 'Play Football with your friends'},
        { text: 'Give Intentionol message for everyone'},

  ]
    return (
    <div>
      <Table hover  className='  p-3 m-auto fs-3 '>
        <thead>
          <tr className="table-dark text-center">
            <th className='bg-success'>Unique Key</th>
            <th className='bg-info'>text Data</th>
          </tr>
        </thead>
        <tbody>
        { ListData.map((e,i)=>{
            return (
            <tr className="table-danger text-center " key={i}>
            <td className='bg-secondary text-light'>{i+1}</td>
            <td className='bg-secondary  text-light'>{e.text}</td>
          </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  )
}
