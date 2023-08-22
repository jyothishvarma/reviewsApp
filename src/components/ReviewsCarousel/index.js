// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  onRightClick = () => {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    if (reviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId + 1,
      }))
    }
  }

  onLeftClick = () => {
    const {reviewId} = this.state

    if (reviewId > 0) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId - 1,
      }))
    }
  }

  render() {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[reviewId]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="reviews-container">
          <button
            className="button"
            type="button"
            onClick={this.onLeftClick}
            data-testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="profile-container">
            <img src={imgUrl} alt={username} className="image" />
            <h1 className="user-name">{username}</h1>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="button"
            type="button"
            onClick={this.onRightClick}
            data-testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
