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

export default function FeatureSection({
  showHeading,
}: {
  showHeading: boolean;
}) {
  return (
    <div className="max-container padding-container relative w-full flex">
      <div className="grid place-items-center w-9/12 bg-base-200">
        {showHeading && (
          <h2 className="text-3xl mt-12 text-center font-bold">
            Our Clinic Management System
          </h2>
        )}
        <div>
          <div className="carousel w-full my-10">
            {featuresData.map((i, k) => {
              return (
                <div id={"slide" + k} className="carousel-item relative w-full">
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
  );
}
