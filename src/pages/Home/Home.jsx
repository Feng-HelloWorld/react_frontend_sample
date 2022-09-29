import { Alert } from "@mui/material"
import React, { useEffect, useState } from "react"

import { PostCard } from "../../components/Card/Card"
import HomeApi from "./api"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    setError(null)
    try {
      const postResponse = await HomeApi.getPosts()
      setPosts(postResponse.data)
      const userResponse = await HomeApi.getUsers()
      var temp = new Array()
      userResponse.data.forEach((user) => {
        temp[user.id] = user
      })
      setUsers(temp)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  useEffect(getData, [])

  if (loading) {
    return <>Loading</>
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      {posts.map((post, idx) => {
        return <PostCard key={idx} post={post} user={users[post.userId]} />
      })}
    </>
  )
}

export default Home
