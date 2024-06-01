import {offer} from '../assets/images'
import Button from "../components/Button"
import {arrowRight} from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">

        <img src={offer} width={773} height={687}
        className='object-contain w-full' />

      </div>

      <div className="flex flex-1 flex-col">
  
        <h2 className="
        font-palanquin text-4xl capitalize max-w-lg font-bold
        ">
          <span className="
          xl:bg-white xl:whitespace-nowrap relative z-10 pr-10
          ">
            
          </span>
          <br/>
          <span className="
          text-coral-red 
          ">Special   </span>
          
           Offer  
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">  
        Embark a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredle savings, we offer unparralleled value that set us apart
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
        Navigate a realm of possibilities designed fulfill your unique desires, surpassing loftiest expectations. Your journey with us nothing short of exceptional
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button 
           label="Shop Now"
           iconURL={arrowRight}
              />

          <Button 
          label="Learn more"
          backgroundColor='bg-white'
          borderColor="border-slate-gray" 
          textColor="text-slate-gray"   
          />


        </div>

      
      </div>

    </section>
    
  )
}

export default SpecialOffer