const featuresData = [
  {
    title: "Patient Profile",
    image: "/patient-profile.png",
  },
  {
    title: "Inventory Item",
    image: "/inventory-item.png",
  },
  {
    title: "Appointment Scheduling",
    image: "/appoinment-scheduling.png",
  },
];

export default function FeatureSection() {
  return (
    <div className="pb-24">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Our Clinic Management System
          </h2>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <div className="grid place-items-center w-9/12 bg-base-200 object-cover object-center 2xl:rounded-5xl">
          <div>
            <div className="carousel w-full my-10">
              {featuresData.map((i, k) => {
                return (
                  <div
                    key={k}
                    id={"slide" + k}
                    className="carousel-item relative w-full"
                  >
                    <img src={i.image} alt={i.title} />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href={"#slide" + (k - 1)} className="btn btn-circle">
                        ❮
                      </a>
                      <a href={"#slide" + (k + 1)} className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
