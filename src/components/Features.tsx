import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";
import Button from "./Button";
import boostMobile from "../assets/images/bg-boost-mobile.svg";
import boostDesktop from "../assets/images/bg-boost-desktop.svg";
import useWindow from "../hooks/useWindow";
const featuresData = [
  {
    icon: brandRecognition,
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: detailedRecords,
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: fullyCustomizable,
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

export default function Features() {
  const { width } = useWindow();
  return (
    <>
      <section className="min-h-full max-w-[75rem] mx-auto">
        <div className="py-20 mx-5 space-y-20">
          <header className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-neutral-veryDarkViolet sm:text-3xl xl:text-4xl">
              Advance Statistics
            </h2>
            <p className="text-sm text-neutral-grayishViolet sm:max-w-[45ch] sm:mx-auto">
              Track how your links are performing across the web with out
              advance statistics dashboard
            </p>
          </header>
          <div className="relative grid gap-20 before:absolute before:bg-primary-cyan before:left-2/4 before:-translate-x-2/4 before:w-2 before:h-full md:flex md:before:h-2 md:before:bottom-2/4 md:before:-translate-y-2/4 md:before:w-full xl:h-96 md:gap-10 md:justify-between">
            <FeatureCard
              className="md:row-span-3 md:self-start md:w-full"
              {...featuresData[0]}
            />
            <FeatureCard
              className="md:row-span-3 md:self-center md:w-full"
              {...featuresData[1]}
            />
            <FeatureCard
              className="md:row-span-3 md:self-end md:w-full"
              {...featuresData[2]}
            />
          </div>
        </div>
      </section>
      <section
        className="grid py-16 space-y-4 place-content-center bg-primary-darkViolet xl:py-20"
        style={{
          backgroundImage: `url(${width > 640 ? boostDesktop : boostMobile})`,
        }}
      >
        <h2 className="text-xl font-bold text-white xl:text-3xl">Boost your links today</h2>
        <Button className="mx-auto max-w-fit" label="Get Started" />
      </section>
    </>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className: string;
};
function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={`relative px-6 pt-16 pb-6 space-y-4 text-center bg-white rounded-md md:max-w-[22rem] md:grow md:shrink ${className}`}
    >
      <div className="absolute p-6 rounded-full bg-primary-darkViolet max-w-fit bottom-full translate-y-2/4 left-2/4 -translate-x-2/4 md:translate-x-0 md:left-8 sm:">
        <img className="size-9" src={icon} alt="Icon" />
      </div>

      <header>
        <h3 className="text-xl font-bold text-neutral-veryDarkViolet sm:text-left">
          {title}
        </h3>
      </header>
      <p className="text-neutral-grayishViolet sm:text-left">{description}</p>
    </article>
  );
}
