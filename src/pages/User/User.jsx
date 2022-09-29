import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Alert } from "@mui/material"
import { PostCard, UserCard } from "../../components/Card/Card"
import UserApi from "./api"

const User = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const getData = async () => {
    setLoading(true)
    setError(null)
    try {
      const postResponse = await UserApi.getPostsbyUser(id)
      setPosts(postResponse.data)
      const userResponse = await UserApi.getUserbyId(id)
      if (userResponse.data.length !== 1) {
        setError("User not found")
      }
      setUser(userResponse.data[0])
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  useEffect(getData, [id])

  if (loading) {
    return <>loading</>
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  return (
    <>
      <UserCard user={user} />
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </>
  )
}

export default User
