import { FcBullish } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function Cms() {
  return (
    <div>
      {/* Hero */}
      <div>
        <div className="hero min-h-[50vh] relative">
          <div className="absolute inset-0 bg-[url('/blue-green-bg.png')] bg-cover bg-center opacity-60"></div>
          <div className="hero-content text-center relative">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Transforming Clinic Technology
              </h1>
              <p className="py-6">
                Discover our cutting-edge technology solutions designed to
                streamline clinic operations.
              </p>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="grid sm:grid-cols-2 gap-10 sm:mx-20 sm:my-20 mx-5 my-5 text-center relative">
        <div>
          <div className="text-5xl font-bold my-5">Why Join Us?</div>
          <div className="my-4">
            Our platform is designed to increase your clinic revenue by
            utilising advanced technology such as Search Engine Optimization for
            multiple platform, promotional campaign and others. With our advance
            CMS, you can efficiently manage patient records, appointments,
            prescription and more.
          </div>
          <div className="grid sm:grid-cols-2 my-4">
            <div>
              <div>
                <FcAcceptDatabase className="w-full text-[42px] mb-2" />
              </div>
              <div className="text-1xl font-bold">Efficient Solution</div>
              <div>
                Save time and improve patient care with our intuitive CMS system
              </div>
            </div>
            <div>
              <div>
                <FcBullish className="w-full text-[42px] mb-2" />
              </div>
              <div className="text-1xl font-bold">Seamless Integration</div>
              <div>
                Our CMS system seamlessly intgrates with your existing clinic
                operation
              </div>
            </div>
          </div>
          <div>
            <button className="btn mt-5">
              Contact Us
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div>
          <figure>
            <img src="/cms-banner.png" alt="cms" />
          </figure>
        </div>
      </div>

      {/* Third */}
      <div className="grid sm:grid-cols-2 gap-4 sm:mx-20 sm:my-20 mx-5 my-5 text-center">
        <div className="card">
          <figure>
            <img src="/cms-banner-2.png" alt="cms" />
          </figure>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-5xl font-bold my-5">
              Streamline Your Marketing Strategy
            </div>
            <div className="my-4">
              Utilise our resource to streamline your marketing strategy. With
              help from our expert, you can create a marketing strategy that is
              tailored to your clinic needs. While focus on your patient care,
              we will focus on your clinic growth.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
