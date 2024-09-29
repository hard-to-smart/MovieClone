import { useNavigate } from 'react-router-dom'
import ProgressBar from './ProgressBar'
import { getImageUrl } from '../ApiUrlRecord'

const Card = ({element, type}) => {
  const navigate = useNavigate();
  const handleCardClick=()=>{
    if (type ==='movie'|| type==='Movies') {
      navigate(`/movie/${element.id}`)
    }
    else if (type==='tv' || type=== 'Tv Shows') {
      navigate(`/tv/${element.id}`)
    }
    else if (element.media_type !== undefined) {
      navigate(`${element.media_type}/${element.id}`)
    }
    else{
      navigate(`*`)
    }
  }

  return (
    <div className='h-[400px] w-[220px] rounded-[18px] shadow cursor-pointer' onClick={handleCardClick} >
        <div className='relative'>
            <img className='h-[300px] w-full rounded-[18px]' src={getImageUrl+element.poster_path }/>
            <div className='absolute flex flex-row justify-between w-full items-center bottom-0'>
            <ProgressBar value={element.vote_average}/>
            <div className='gap-2 flex flex-row '>
                <p className='bg-pink-600 w-[40px] h-[18px] text-center rounded-sm'>x</p>
                <p className=' bg-pink-600 w-[40px] h-[18px] text-center rounded-sm'>u</p>
            </div>
            </div>
        </div>
        <div className='p-2'>
            <h3 className=' text-xl font-semibold'>{element.original_title}</h3>
            <p className='text-slate-100 text-sm'> {element.release_date}</p>
        </div>
    </div>
  )
}

export default Card