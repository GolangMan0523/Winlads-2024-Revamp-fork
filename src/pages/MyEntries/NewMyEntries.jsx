import React, { useEffect, useState } from 'react'
import TopNav from '../../components/TopNav/TopNav'
import axios from 'axios';
import { validateCurrentUser } from '../../utils/validateuser';
import Loader from '../../components/Loader/Loader';
import DashboardVehicleCard from '../../components/DashboardVehicleCard/DashboardVehicle';
import MainCar from "../../assets/images/MainCar.png";
import useScrollToTop from '../../utils/useScrollTop';

const NewMyEntries = () => {
  useScrollToTop()
  const [valUser, setValUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [myentries, setMyEntries] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);



  useEffect(() => {
    currentUserValidation().then((user) => {
      getGiveawaySummery(user.uid)
      setIsLoading(false)
    }).catch(err => {
      console.log(err);
    })
  }, [])


  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      return (validator.user);
      //setIsLoading(false);
    } else {
      navigate("/login");
      //  setIsLoading(false);
    }
  };

  const getGiveawaySummery = async (uid) => {
    try {
      const summery = await axios.get(`${import.meta.env.VITE_SERVER_API}/myRaffleRoundsSummary?uid=${uid}`);
      console.log(summery.data.data.rounds, "Rounds");
      let upcomingRounds = summery.data.data.rounds.filter(round => new Date(round.startingtime) > Date.now());
      setMyEntries(upcomingRounds.sort((a, b) => new Date(a.startingtime) - new Date(b.startingtime)));
      upcomingRounds.map((g) => {
        setTotalEntries((prev) => (prev + g.ticketCount))
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex flex-col xl:px-10 px-5 py-5 w-full'>
      {
        isLoading && <div className='absolute top-0 left-0 w-full h-full z-10'>
          <Loader />
        </div>
      }

      <div className='flex items-center justify-center'>
        <div className='w-1/2 hidden xl:block'>
          <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl ">
            My Entries
          </p>
        </div>

        <div className="flex-col flex-1  xl:flex">
          <div className="py-4">
            <TopNav textColor={'black'} />
          </div>
        </div>
      </div>

      <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl  xl:hidden ">
        My Entries
      </p>
      <div className='flex lg:flex-row flex-col-reverse items-center justify-start gap-10'>
        <div className='flex items-center justify-between w-full lg:w-1/2 bg-[#EFF9FB] p-3 rounded-xl rounded-r-full'>
          <div className='border-l-4 pl-5 border-orange-600'>
            <p>Total <br /> <span className='text-xl xl:text-2xl font-bold'>Active Entries : </span><span></span></p>
          </div>
          <div className='bg-[#E4EFF0] p-3 rounded-full'>
            <div className='bg-white p-3 rounded-full'>
              <div className='bg-orange-600 hover:bg-orange-500 p-10 font-bold text-white rounded-full relative'>
                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{totalEntries}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-5/6 sm:w-1/2 lg:w-1/4'>
          <img src={MainCar} className='w-full h-full object-contain' />
        </div>

      </div>
      <h2 className='text-xl font-bold '>Major Draws</h2>
      <div className='flex items-center justify-start mt-4 flex-wrap w-full '>

        {
          myentries.filter((giv)=>(giv.raffle.type == 'max' || giv.raffle.type =='tour' )).map((giveaway, key) => (
            <div key={key} className='w-full md:w-1/3 xl:w-1/4 p-2 min-w-60'>
              <DashboardVehicleCard
                key={key}
                type={'vehicle'} //giveaway.raffle.type
                id={0}//giveaway._id
                name={giveaway.name} //
                date={giveaway.startingtime ? giveaway.startingtime : null}
                color={'#000'}//giveaway?.raffle?.color
                raffleimage={giveaway.roundimage} //giveaway.raffle?.raffleimage
                eligeble={valUser?.subscriptionPlan?.data?.name ? false : !(giveaway.raffle.type == 'max' || giveaway.raffle.type == 'tour') ? true : false}
                oneOffPackage={false} //giveaway.raffle?.name === "Vehicle" ? true : false
                status={0}
                count={giveaway.ticketCount}

              // winningNumber={'My Entries'}
              // onButton={() => {
              //   handleButton({
              //     id: giveaway?._id,
              //     price: giveaway?.price,
              //     name: giveaway?.name,
              //   });
              // }}
              />
            </div>

          ))
        }
      </div>

      <h2 className='text-xl font-bold '>Weekly Draws</h2>
      <div className='flex items-center justify-start mt-4 flex-wrap w-full '>

        {
          myentries.filter((giv)=>(giv.raffle.type !== 'max' && giv.raffle.type !=='tour' )).map((giveaway, key) => (
            <div key={key} className='w-full md:w-1/3 xl:w-1/4 p-2 min-w-60'>
              <DashboardVehicleCard
                key={key}
                type={'vehicle'} //giveaway.raffle.type
                id={0}//giveaway._id
                name={giveaway.name} //
                date={giveaway.startingtime ? giveaway.startingtime : null}
                color={'#000'}//giveaway?.raffle?.color
                raffleimage={giveaway.roundimage} //giveaway.raffle?.raffleimage
                eligeble={valUser?.subscriptionPlan?.data?.name ? false : !(giveaway.raffle.type == 'max' || giveaway.raffle.type == 'tour') ? true : false}
                oneOffPackage={false} //giveaway.raffle?.name === "Vehicle" ? true : false
                status={0}
                count={giveaway.ticketCount}

              // winningNumber={'My Entries'}
              // onButton={() => {
              //   handleButton({
              //     id: giveaway?._id,
              //     price: giveaway?.price,
              //     name: giveaway?.name,
              //   });
              // }}
              />
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default NewMyEntries