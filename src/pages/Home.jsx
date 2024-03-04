const Home = () => {
  return (
    <main className="bg-home-mobile md:bg-home-tablet bg-cover bg-no-repeat w-full h-[667px] md:h-[1024px] flex  justify-center">
      <div className="info px-6 pt-28 flex flex-col items-center justify-around">
        <p className="font-barlow-condensed text-sm text-violet uppercase active:animate-spin">So, you want to travel to</p>
        <h1 className="font-bellefair text-2xxl text-white uppercase leading-[100px] active:animate-spin">Space</h1>
        <p className="font-barlow text-[15px] text-violet tracking-normal text-center font-extralight leading-[25px]">Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!</p>
        <div className="explore w-[150px] h-[150px] bg-white rounded-full inline-flex mt-[81px] mb-12 flex-col justify-center items-center hover:animate-pulse-shadow-width cursor-pointer active:animate-spin">
          <h2 className="
            font-bellefair text-[20px]
            tracking-0.5 
            tracking-[1.25px] uppercase 
            font-thin">Explore</h2>
        </div>
      </div>
    </main>
  )
}
export default Home