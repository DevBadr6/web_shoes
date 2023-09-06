import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-planquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-lg font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover sty IS NI e arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconUrl={arrowRight} />
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:max-h-screen max-xl:py-40 bg-hero bg-center bgcover bg-primary">
        <img src={bigShoe1} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
      </div>
    </section>
  );
};

export default Hero;
