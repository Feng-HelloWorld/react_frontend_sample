import React from "react"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import { Avatar, CardContent, CardHeader } from "@mui/material"
import { Link } from "react-router-dom"

import "./Card.css"

const PostCard = (props) => {
  const { user, post } = props
  return (
    <Card className="card">
      <CardHeader
        title={post.title}
        subheader={
          user && (
            <Tooltip title={`View ${user.username}'s posts`}>
              <Link className="userlink" to={`/user/${user.id}`}>
                {user.username}
              </Link>
            </Tooltip>
          )
        }
      />
      <CardContent className="post">{post.body}</CardContent>
    </Card>
  )
}

const userInfo = (user) => {
  return (
    <>
      <Typography variant="h4">{user.username}</Typography>
      <Typography variant="subtitle1">{user.email}</Typography>
      <Typography variant="subtitle1">{user.website}</Typography>
    </>
  )
}

const UserCard = (props) => {
  const { user } = props
  return (
    <Card className="card">
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "CornflowerBlue",
              height: "64px",
              width: "64px",
            }}
          >
            {user.username[0]}
          </Avatar>
        }
        title={userInfo(user)}
      />
    </Card>
  )
}

export { PostCard, UserCard }
