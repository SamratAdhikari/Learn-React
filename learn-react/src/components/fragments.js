import React from 'react'

function Columns() {
    // const items = []
  return (
    <>

    {/* shows warnings thats why it is commented out
        {
        items.map(item => {
            <React.Fragment key={item.id}>
                <span>Title</span>
                <p>{item.title}</p>
            </React.Fragment>
        })
    } */}
      <td>Name</td>
      <td>Samrat</td>
    </>
  )
}


function Table() {
  return (
    <table>
        <tbody>
            <tr>
                <Columns/>
            </tr>
        </tbody>
    </table>
  )
}



export function Fragnent() {
  return (
    <React.Fragment>
        <h5>
        Fragment
        </h5>
        <p>This is a paragraph about fragments in ReactJS</p>

        <Table/>
    </React.Fragment>
  )
}
