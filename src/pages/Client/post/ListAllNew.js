import React from 'react'
import { NavLink } from 'react-router-dom'

const ListAllNew = () => {
    return (
        <div className='container w-10/12 m-auto'>
            <div className='row mt-10'>
                <div className='w-11/12 m-auto flex' >
                    <div className='bg-blue-900 w-5/12'>
                        <div className='' >
                            <p className='p-3 text-left text-2xl text-sky-300 underline font-bold uppercase'>Men's Team</p>
                            <p className='p-3 text-4xl font-bold text-white text-left'>TITLE RACE WILL GO TO THE WIRE' SAYS DE BRUYNE</p>
                        </div>
                    </div>
                    <div><img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649737688/al_19927_tsvbhg.webp' />
                    </div></div>


            </div>
            <div className='row mb-20 mt-20'>
                <div className='flex gap-10 w-11/12 m-auto'>
                    <div className='left w-8/12  '>
                        <div className='gap-10 flex justify-between'>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649739040/dias-2_xadknm.webp' />
                                <p className='font-bold text-xl'>Training: Ruben returns to the fold</p>
                                <span className='uppercase'>picture special</span>
                            </div>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649739044/joan-feat_ofahwf.webp' />
                                <p className='font-bold text-xl' >'Love for my family is my motivation' says Cancelo</p>
                                <span>MEN'S TEAM</span>
                            </div>
                        </div>
                        <div className='mt-14 gap-10 flex justify-between'>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649741873/gj-player-cam_li2pfu.webp' />
                                <p className='font-bold text-lg'>Player Focus: Gabriel Jesus</p>
                                <span className='uppercase text-sm'>FEATURES</span>
                            </div>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649741871/extended-highlights-wide-003_ecqxmx.webp' />
                                <p className='font-bold text-lg'>City 2-2 Liverpool: Extended highlights</p>
                                <span className='uppercase text-sm'>match highlights</span>
                            </div>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649741871/93-20_image-002_axhaus.webp' />
                                <p className='font-bold text-lg'>93:20 Anniversary Fan Event: All you need to know</p>
                                <span className='uppercase text-sm'>club news</span>
                            </div>
                            <div className='col text-left '>
                                <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649741876/pitcam-wide-city-v-liverpool_gbefsw.webp' />
                                <p className='font-bold text-lg'>Pitcam Highlights: City 2-2 Liverpool</p>
                                <span className='uppercase text-sm'>City+</span>
                            </div>
                        </div>

                    </div>
                    <div className='right w-4/12'>
                        <div className='border-1 mb-10 border-gray-700 p-3'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>NEXT FIXTURE</p>
                                <NavLink className='block underline text-blue-900 font-bold' to="#">
                                    <span>Next Fixture</span>
                                    <svg class="w-5 h-5 inline-block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </NavLink>
                            </div>
                            <div>
                                <p className='text-black font-bold'> Web 13 Apr</p>
                                <p> Champions League</p>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <img src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649740276/madrid_e2izkp.webp' />
                                    <p  >Atletico</p>
                                </div>
                                <div className='bg-gray-200 pt-3 px-4 '>
                                    <p className='text-2xl'>02:00</p>
                                    <p>VIE</p>
                                </div>
                                <div>
                                    <img src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649740275/manchester_city_fc_badge_n74ptd.webp' />
                                    <p className='font-bold'>Man City</p>
                                </div>
                            </div>
                            <div className='mt-10 border-1 border-blue-900 py-3 text-xl text-blue-900 font-bold'>
                                PREVIEW
                            </div>
                        </div>
                        <div className='border-1 border-gray-700 p-3'>
                            <div className='flex justify-between'>
                                <p className='font-bold'>LAST FIXTURE</p>
                                <NavLink className='block underline text-blue-900 font-bold' to="#">
                                    <span>All result</span>
                                    <svg class="w-5 h-5 inline-block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </NavLink>
                            </div>
                            <div>
                                <p className='text-black font-bold'> Sun 10 Apr</p>
                                <p> Premier League</p>
                            </div>
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <img width={60} src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649741499/liverpool_isklek.webp' />
                                    <p className='font-bold' >Liverpool</p>
                                </div>
                                <div className='bg-gray-200 pt-3 px-4 '>
                                    <p className='text-2xl'>2-2</p>
                                </div>
                                <div>
                                    <img src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649740275/manchester_city_fc_badge_n74ptd.webp' />
                                    <p className='font-bold'>Man City</p>
                                </div>
                            </div>
                            <div className='mt-10 border-1 border-blue-900 py-3 text-xl text-blue-900 font-bold'>
                                PREVIEW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <h2><span className='m-10 border-1 text-blue-900 border-blue-900 font-bold px-3 py-2 ' style={{ background: '#fff', padding: '0 10px' }}>More News <svg class="w-5 h-5 inline-block " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg></span></h2>
            </div>

            <div className='row mt-24 '>
                <div className='flex justify-between gap-10 w-11/12 m-auto'>
                    <div>
                        <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743871/13310918869540352880_rxsoai.jpg' />
                    </div>
                    <div><img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743622/9964853932064717632_hlwgiu.jpg' /></div>
                    <div><img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743599/6225171702667870891_xjdxab.jpg' />
                    </div>
                </div>
            </div>
            <div className='row mt-24'>
                <div className='w-11/12 m-auto flex' >
                    <div className='bg-blue-900 w-4/12'>
                        <div className='' >
                            <img className='pt-4 mb-4 mx-auto ' width={100} src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743994/cityzens_rcfpzk.svg' />
                            <p className='p-3 text-3xl font-bold text-white text-center'>Access exclusive content, rewards and competitions!</p>
                            <h2 className='p-3 mt-3 mx-20 font-bold text-xl bg-yellow-300'>JOIN FOR FREE</h2>
                        </div>
                    </div>
                    <div className='w-8/12'><img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743972/logged-out-landscape_p05c1o.jpg' />
                    </div></div>


            </div>
            <div className='row mt-24'>
                <div className='w-11/12 m-auto flex' >
                    <div className='w-8/12'>
                        <img className='w-full' src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743985/match-highlights-wide-004_azuyst.webp' />
                    </div>
                    <div className='bg-gray-700 w-4/12 '>
                        <div className='' >
                            <img className='pt-4 mb-4 mx-auto ' width={100} src='https://res.cloudinary.com/dl8w6p4sf/image/upload/v1649743994/cityzens_rcfpzk.svg' />
                            <p className='p-3 text-3xl font-bold text-white text-center'>CITY 2-2 LIVERPOOL: BRIEF HIGHLIGHTS</p>
                            <h2 className='p-3 mt-3 mx-20 font-bold text-xl bg-yellow-300'>JOIN FOR FREE</h2>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ListAllNew