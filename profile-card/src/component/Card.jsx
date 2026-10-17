import CardSocialIcon from './CardSocialIcon'
import CardButton from './CardButton'
import CardLike from './CardLike'

const Card = (props) => {
  
  return (
    <div className=' bg-white text-black rounded-md mb-4 '>

      <div className='h-20 bg-blue-700 w-full rounded-tr-md rounded-tl-md relative'>
        <div className='absolute right-24 -bottom-5 bg-white rounded-full'>
          <img className='rounded-full border-2 border-blue-700 p-0.5 w-20 h-20 object-cover' src={props.details.profileImage} alt="" />
        </div>
      </div>

      <div className='py-7 flex justify-center flex-col gap-1 text-center'>
        <h2 className='font-semibold text-[16px]'>{props.details.name}</h2>
        <p className='text-[10px]'>{props.details.title}</p>
      </div>

      <CardSocialIcon social={props.details.socialLinks}/>

      <div className='flex items-center justify-center gap-3 py-5'>
        <CardButton btntext={props.details.buttons[0]}/>
        <CardButton btntext={props.details.buttons[1]}/>
      </div>

      <div className='flex items-center justify-center gap-4 pb-3'>
        <CardLike stats={props.details.stats}/>
      </div>
    </div>
  )
}

export default Card
