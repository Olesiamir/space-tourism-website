const Home = () => {
  return (
    <main className="bg-home-mobile md:bg-home-tablet bg-cover bg-no-repeat w-full h-[667px] md:h-[1024px] flex  justify-center">
      <div className="flex flex-col items-center justify-around px-6 pt-28 md:px-0 md:pt-32 md:w-[450px]">
        <div className="info  flex flex-col items-center justify-around mt-16">
          <p className="font-barlow-condensed text-sm md:text-[20px] md:tracking-[3.38px] text-violet uppercase active:animate-spin">So, you want to travel to</p>
          <h1 className="font-bellefair text-2xxl md:text-4xl md:py-6 text-white uppercase leading-[100px] md:leading-[150px] active:animate-spin">Space</h1>
          <p className="font-barlow text-[15px] text-violet tracking-normal text-center font-extralight leading-[25px] md:text-sm md:leading-[28px] md:tracking-[0px] md:font-light md:py-1">Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="explore w-[150px] h-[150px] md:w-[242px] md:h-[242px] bg-white rounded-full inline-flex mt-[81px] mb-12 md:mt-40 flex-col justify-center items-center hover:animate-pulse-shadow-width cursor-pointer active:animate-spin">
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