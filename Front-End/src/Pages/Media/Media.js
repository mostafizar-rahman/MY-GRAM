import { useQuery } from '@tanstack/react-query'
import Card from '../../Components/Card/Card'
import useTitle from '../../useTitle/useTitle'

function Media() {
  useTitle('Media')
  const { isLoading: loding, data: posts = [], refetch } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const res = await fetch(`https://mygram-server.vercel.app/post`)
      const data = await res.json()
      return data
    }
  })

  return (
    <div className=''>
      {
        loding ? <div className="flex justify-center items-center min-h-screen">
          <div className="border-t-transparent border-solid animate-spin  rounded-full border-black border-2 h-24 w-24"></div>
        </div> :
          posts.map(post => <Card key={post._id} post={post} refetch={refetch} />)
      }

    </div>
  )
}

export default Media