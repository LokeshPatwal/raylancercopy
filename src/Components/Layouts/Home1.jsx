import React from 'react'

const Home1 = () => {
    return (
        <div className='w-full' style={{backgroundImage: "url('/Images/Background1.png')"}}>
            <section className='relative font-anybody flex flex-col justify-center items-center'>
                <div className='w-[86%] absolute top-[4%] flex '>
                    <div className='flex flex-col flex-1 text-white gap-y-[5%]'>
                        <h1 className='font-bold text-4xl capitalize leading-normal tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada.</h1>
                        <p className='font-normal text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a sollicitudin enim. Fusce vitae pharetra magna. Nullam nunc ipsum, rhoncus eget maximus sed, pellentesque eu turpis. Suspendisse nec tellus vitae purus tincidunt malesuada sit amet at ante. Ut vel purus condimentum enim congue egestas et et dui. Aenean elementum, ligula ac aliquam gravida, risus nulla bibendum orci, non auctor leo mauris ut risus. Nullam id rutrum velit, eu tempus tortor.
                        </p>
                        <div className='flex items-center'>
                            <button className='h-12 w-12 bg-gradient-to-r from-[#F542F9] to-[#343BF2] rounded-full'>
                                <img src='Images/Playbutton.png' alt='Playbutton' />
                            </button>
                            <button class="m-4 p-1 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                                <span class="block text-white px-4 py-2 font-semibold rounded-full bg-transparent">Request Proposal</span>
                            </button>
                        </div>
                    </div>
                    <img src='Images/Buildings.png' alt='Buildings' className='w-[10%] flex-1' />
                </div>
            </section>
            <section className='absolute top-[100%] w-full mx-auto font-anybody text-center'>
                <div className='w-[86%] mx-auto space-y-[2%]'>
                    <h1 className='font-bold text-2xl text-[#FFFFFF] capitalize'>Lorem ipsum dolor sit amet, consectetur adipiscing. </h1>
                    <p className='font-normal text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a sollicitudin enim. Fusce vitae pharetra magna. Nullam nunc ipsum, rhoncus eget maximus sed, pellentesque eu turpis. Suspendisse nec tellus vitae purus tincidunt malesuada sit amet at ante. Ut vel purus condimentum enim congue egestas et et dui. Aenean elementum, ligula ac aliquam gravida, risus nulla bibendum orci, non auctor leo mauris ut risus. Nullam id rutrum velit, eu tempus tortor.</p>
                    <div className='flex justify-center space-x-[2%]'>
                        <div className='space-y-[8%] py-[1.5%] w-[10vw] rounded-2xl h-fit bg-gradient-to-b from-[#433E3E] to-[#000000C9]'>
                            <h1 className='font-[1000] text-transparent text-4xl font-inter bg-clip-text bg-gradient-to-r from-[#F542F9_4.11%] to-[#343BF2_103.25%]'>250+</h1>
                            <p className='text-white text-sm w-[80%] mx-auto'>web3.0 cryto project unleashed</p>
                        </div>
                        <div className='space-y-[8%] py-[1.5%] w-[10vw] rounded-2xl h-fit bg-gradient-to-b from-[#433E3E] to-[#000000C9]'>
                            <h1 className='font-[1000] text-transparent text-4xl font-inter bg-clip-text  bg-gradient-to-r from-[#F542F9_4.11%] to-[#343BF2_103.25%]'>300+</h1>
                            <p className='text-white text-sm w-[80%] mx-auto'>web3.0 cryto project unleashed</p>
                        </div>
                        <div className='space-y-[8%] py-[1.5%] w-[10vw] rounded-2xl h-fit bg-gradient-to-b from-[#433E3E] to-[#000000C9]'>
                            <h1 className='font-[1000] text-transparent text-4xl font-inter bg-clip-text  bg-gradient-to-r from-[#F542F9_4.11%] to-[#343BF2_103.25%]'>2M+</h1>
                            <p className='text-white text-sm w-[80%] mx-auto'>web3.0 cryto project unleashed</p>
                        </div>
                        <div className='space-y-[8%] py-[1.5%] w-[10vw] rounded-2xl h-fit bg-gradient-to-b from-[#433E3E] to-[#000000C9]'>
                            <h1 className='font-[1000] text-transparent text-4xl font-inter bg-clip-text  bg-gradient-to-r from-[#F542F9_4.11%] to-[#343BF2_103.25%]'>15+</h1>
                            <p className='text-white text-sm w-[80%] mx-auto'>web3.0 cryto project unleashed</p>
                        </div>
                        <div className='space-y-[8%] py-[1.5%] w-[10vw] rounded-2xl h-fit bg-gradient-to-b from-[#433E3E] to-[#000000C9]'>
                            <h1 className='font-[1000] text-transparent text-4xl font-inter bg-clip-text  bg-gradient-to-r from-[#F542F9_4.11%] to-[#343BF2_103.25%]'>250+</h1>
                            <p className='text-white text-sm w-[80%] mx-auto'>web3.0 cryto project unleashed</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>
        </div>
    )
}

export default Home1