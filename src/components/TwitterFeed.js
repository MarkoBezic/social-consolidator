import React, { Component } from 'react'
import { userDataRef } from '../firebase'
import { Timeline } from 'react-twitter-widgets'

class TwitterFeed extends Component {
  state = {
    twitterUser: '',
    tempTwitterUser: '',
    twitterUserDocId: '',
  }

  getUserFromDatabase = async () => {
    await userDataRef.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        this.setState({
          twitterUser: doc.data().twitterId,
          twitterUserDocId: doc.id,
        })
      })
    })
  }

  componentDidMount = () => {
    this.getUserFromDatabase()
  }

  handleUserInput = e => {
    e.preventDefault()
    this.setState({
      tempTwitterUser: e.target.value,
    })
  }

  createUserRecordInFirebase = () => {
    const userObject = {
      twitterId: this.state.tempTwitterUser,
    }
    userDataRef.doc().set(userObject)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.createUserRecordInFirebase()
    this.setState({
      twitterUser: this.state.tempTwitterUser,
    })
    this.getUserFromDatabase()
  }

  handleRemoveUser = () => {
    userDataRef
      .doc(this.state.twitterUserDocId)
      .delete()
      .then(() => {
        console.log('Document successfully deleted!')
      })
      .catch(error => {
        console.error('Error removing document: ', error)
      })
    this.setState({
      twitterUser: '',
      twitterUserDocId: '',
    })
  }

  render() {
    return (
      <div className="p-3 border w-50">
        {this.state.twitterUser ? (
          <div>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: this.state.twitterUser,
              }}
              options={{
                height: '500',
              }}
            />
            <button
              className="btn btn-primary mx-1"
              type="submit"
              onClick={this.handleRemoveUser}
            >
              Remove account
            </button>
          </div>
        ) : (
          <div className="d-flex flex-column ">
            <label for="twitter-name">Twitter account:</label>
            <form onSubmit={e => this.handleSubmit(e)}>
              <div className="row">
                <div className="col-8">
                  <input
                    className="p-1"
                    type="text"
                    id="twitter-name"
                    placeholder="Enter account name"
                    onChange={this.handleUserInput}
                  ></input>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default TwitterFeed
