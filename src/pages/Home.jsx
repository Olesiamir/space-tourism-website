const Home = () => {
  return (
    <main className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-no-repeat w-full h-[667px] md:h-[1024px] lg:h-[900px] flex  justify-center lg:items-end ">
      <div className="flex flex-col items-center justify-around px-6 pt-12 md:px-0 md:pt-32 md:w-[450px] lg:w-full lg:flex-row lg:h-max lg:pt-0 lg:pb-32">
        <div className="info  flex flex-col items-center justify-around mt-16 lg:w-[450px] lg:items-start">
          <p className="font-barlow-condensed text-sm md:text-[20px] md:tracking-[3.38px] text-violet uppercase active:animate-spin lg:tracking-widest lg:text-lg">So, you want to travel to</p>
          <h1 className="font-bellefair mx-3 text-2xxl md:text-4xl md:py-6 text-white uppercase leading-[100px] md:leading-[150px] active:animate-spin">Space</h1>
          <p className="font-barlow text-[15px] text-violet tracking-normal text-center font-extralight leading-[25px] md:text-sm md:leading-[28px] md:tracking-[0px] md:font-light md:py-1 lg:text-base lg:leading-8 lg:w-[444px] lg:text-justify ">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="explore w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] bg-white rounded-full inline-flex mt-[81px] mb-12 md:mt-40 lg:mb-0 flex-col justify-center items-center hover:animate-pulse-shadow-width cursor-pointer active:animate-spin">
          <h2 className="
            font-bellefair text-[20px]
            tracking-0.5 md:text-xl
            tracking-[1.25px] uppercase 
            font-thin">Explore</h2>
        </div>
      </div>  
    </main>
  )
}
export default Home