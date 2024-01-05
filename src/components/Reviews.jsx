export default function Reviews() {
  return (
    <section className="mt-32 relative">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-extrabold h3ResponsiveGlobal">
          Testimonial
        </h3>
        <h2 className="text-5xl text-center py-6 w-[45rem] h2ResponsiveGlobal">
          Client raves and reviews
        </h2>
        <p className="text-lg leading-9 text-center w-[50rem] pResponsiveGlobal">
          Discover what our clients are saying about our exceptional web
          development services. Read testimonials that speak to our commitment
          and expertise.
        </p>
        <div className="w-[81.25rem] h-[22.2rem] flex flex-col justify-between items-center bg-white bg-opacity-[4%] rounded-3xl my-[5rem] p-[2.8rem]">
          <div className="h-[6rem] w-[6rem] bg-[#3FD0BF] flex justify-center rounded-full">
            <img
              className=""
              src="images/reviewsweb/DQuote.svg"
              alt="DQuaote"
            />
          </div>
          <p className="text-3xl font-extrabold text-center">
            Incredible web development team! Exceeded expectations with
            innovative solutions. Seamless process. Highly recommend!
          </p>
          <p>- Sarah Thompson -</p>
        </div>
      </div>
    </section>
  );
}
