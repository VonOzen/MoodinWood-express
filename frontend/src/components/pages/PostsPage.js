import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAppIsLoading } from '../../js/actions/appActions'

const PostsPage = () => {
  const dispatch = useDispatch()

  return (
    <>
      <h1>Posts Page</h1>
    </>
  )
}

export default PostsPage
