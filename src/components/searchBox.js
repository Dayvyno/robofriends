import React from 'react'

function SearchBox({searchHandler}){

  const searchStyle = {
    textAlign:'center',
    fontSize: '1.8em',
    margin: '10px',
  }

  const searchStyle2 = {
    backgroundColor:"#cccccc",
    borderRadius: '5px'
  }

  return(
    <div style={searchStyle} >
      <input type="search" 
      style={searchStyle2}
      name="searchbox" 
      id="searchbox" 
      placeholder= "Search robots....."
      onChange={searchHandler} />
    </div>
  )
  
}

export default SearchBox