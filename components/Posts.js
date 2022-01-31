import Post from './Post'

function Posts() {
  const posts = [
    {
      id: '123',
      username: 'jondoe',
      userImg: 'https://randomuser.me/api/portraits/women/62.jpg',
      img: 'https://randomuser.me/api/portraits/women/62.jpg',
      caption: 'This is dope',
    },
    {
      id: '124',
      username: 'hihidoe',
      userImg: 'https://randomuser.me/api/portraits/men/61.jpg',
      img: 'https://randomuser.me/api/portraits/men/61.jpg',
      caption: 'This is funny. Hehehe',
    },
  ]

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          caption={post.caption}
          img={post.img}
          userImg={post.userImg}
          username={post.username}
        />
      ))}
    </div>
  )
}

export default Posts
