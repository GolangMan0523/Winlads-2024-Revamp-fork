import React, { useEffect, useState } from 'react'
import PartnerBox from '../../components/PortalPartners/PartnerBox'
import TopNav from '../../components/TopNav/TopNav'
import PartnerModal from '../../components/PortalPartners/PartnerModal';
import axios from 'axios';
import { validateCurrentUser } from '../../utils/validateuser';
import Loader from '../../components/Loader/Loader';

const Partners = () => {
    const [selectedPartner, setSelectedPlan] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [partners, setPartners] = useState([]);
    const [valUser, setValUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleShowModal = (details) => {
        setSelectedPlan(details);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setSelectedPlan({});
        setShowModal(false);
    }
    const getPartners = async () => {
        try {
            const respo = await axios.get(`${import.meta.env.VITE_SERVER_API}/getPartners`)
            setPartners(respo.data.data)
            console.log(respo.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getDetails = async () => {
        return Promise.all([currentUserValidation(),getPartners() ])
    }

    useEffect(() => {
        getDetails().then(()=>{
            setIsLoading(false)
        }).catch(err=>{
            console.log(err);
        })
    }, [])


    const currentUserValidation = async () => {
        const validator = await validateCurrentUser();
        if (validator.validatorBl) {
            console.log("Session OK", validator.user);
            setValUser(validator.user);
            //setIsLoading(false);
        } else {
            navigate("/login");
          //  setIsLoading(false);
        }
    };
    return (
        <div className='flex flex-col xl:px-10 px-5 py-5 w-full'>
            {
                isLoading && <div className='absolute top-0 left-0 w-full h-full z-10'>
                    <Loader />
                </div>
            }
            <div className='flex items-center justify-center'>
                <div className='w-1/2 hidden xl:block'></div>

                <div className="flex-col flex-1  xl:flex">
                    <div className="py-4">
                        <TopNav textColor={'black'} />
                    </div>
                </div>
            </div>

            <h1 className='font-semibold text-lg xl:text-2xl px-1'><span className='text-blue-600'>DISCOUNTS</span> FROM OUR PARTNERS</h1>
            <div className='flex items-center justify-start flex-wrap mt-5 w-full'>
                {
                    !isLoading && partners.map((partner,key) => (
                        <PartnerBox onClick={handleShowModal} partner={partner} currentSub={valUser.subscriptionPlan?.data} key={key}/>
                    ))
                }
            </div>
            {
                (showModal && !isLoading) &&
                <PartnerModal partner={selectedPartner} currentSub={valUser.subscriptionPlan?.data} handleClose={handleCloseModal} />
            }
        </div>
    )
}

export default Partners