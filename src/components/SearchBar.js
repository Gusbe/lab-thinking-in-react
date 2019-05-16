import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>Search</label>
        <form>
          <input type="text" name="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
