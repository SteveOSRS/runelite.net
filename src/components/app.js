import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import Navigation from './navigation'
import Footer from './footer'

const App = ({ title, component, payload }) => {
  const Component = require(`../containers/${component}`).default

  return (
    <div>
      <Navigation />
      <LoadingBar />
      <Component {...payload} />
      <Footer />
    </div>
  )
}

export default connect(
  (state, props) => ({
    ...props,
    ...state.app
  })
)(App)
