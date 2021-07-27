// Write your code here.
import {Component} from 'react'
import './index.css'

class AgeCalculator extends Component {
  state = {
    yearOfBirth: '',
    showError: false,
    showResult: false,
  }

  getCalculatedAge = () => {
    const {yearOfBirth} = this.state
    const dateOfBirth = new Date(yearOfBirth)
    const dateOfBirthYear = dateOfBirth.getFullYear()

    const presentDate = new Date()
    const presentDateYear = presentDate.getFullYear()

    return presentDateYear - dateOfBirthYear
  }

  onClickAgeCalculate = () => {
    const {yearOfBirth} = this.state
    const age = this.getCalculatedAge()

    if (age > 0 && yearOfBirth.length <= 4 && Number.isInteger(age)) {
      this.setState({showError: false, showResult: true})
    } else {
      this.setState({showError: true})
    }
  }

  renderCalculatedAge = () => {
    const {showResult} = this.state
    const calculatedAge = this.getCalculatedAge()

    if (showResult) {
      if (calculatedAge === 1) {
        return (
          <p className="calculated-age-text">
            You are {calculatedAge} year old by the end of 2021
          </p>
        )
      }
      return (
        <p className="calculated-age-text">
          You are {calculatedAge} year old by the end of 2021
        </p>
      )
    }
    return null
  }

  renderErrorMessage = () => {
    const {showError} = this.state

    if (showError) {
      return <p className="error-message">Enter the year that you are Born</p>
    }
    return null
  }

  onChangeYearOfBirth = event => {
    this.setState({
      yearOfBirth: event.target.value,
      showError: false,
      showResult: false,
    })
  }

  render() {
    const {yearOfBirth} = this.state
    return (
      <div className="age-calculator-app-container">
        <div className="age-calculator-container">
          <h1 className="heading">Age Calculator</h1>
          <div>
            <input
              type="text"
              className="input-text"
              onChange={this.onChangeYearOfBirth}
              value={yearOfBirth}
              placeholder="Enter the year that you are born"
            />
            {this.renderErrorMessage()}
          </div>
          {this.renderCalculatedAge()}
          <button
            type="button"
            className="button"
            onClick={this.onClickAgeCalculate}
          >
            Calculate
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          alt="person-img"
          className="person-img"
        />
      </div>
    )
  }
}
export default AgeCalculator
