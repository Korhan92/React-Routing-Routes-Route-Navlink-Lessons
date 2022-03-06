// import React from 'react'
// import {useParams} from 'react-router-dom'

// export default function PersonDetail() {
//     let params=useParams();
//     console.log(params)
//   return (
//     <div>PersonDetail Page <br/>USER ID: {params.personId}</div>
//   )
// }

import React, { Component } from 'react'

export default class PersonDetail extends Component {
  render() {
      console.log("Url Info",window.location.pathname)
      let lastParams = window.location.pathname.split('/').pop()
      console.log("lastParams:",lastParams)
      return (
      <div>PersonDetail Page
          <br/>USER ID: ???
      </div>

    )
  }
}
