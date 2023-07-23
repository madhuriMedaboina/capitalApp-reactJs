import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChange = event => {
    this.setState({activeId: event.target.value})
  }

  render() {
    const {activeId} = this.state

    const filterItem = countryAndCapitalsList.filter(
      each => each.id === activeId.toUpperCase(),
    )

    const country = filterItem.length > 0 ? filterItem[0].country : ''

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select className="select" onChange={this.onChange}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>

          <p className="desc">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
