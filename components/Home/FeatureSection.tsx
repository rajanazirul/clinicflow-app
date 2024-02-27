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
    title: "Inventory Report",
    image: "/inventory-report.png",
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
    <div>
      {showHeading && (
        <h2 className="text-3xl mt-12 text-center font-bold">
          Clinic Management System
        </h2>
      )}
      <div className={`grid place-items-center w-full`}>
        <div className="max-w-6xl px-4 py-8 content-center justify-center">
          {featuresData.map((i, k) => {
            return (
              <div className="card-wrap">
                <div className="card w-140 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{i.title}</h2>
                  </div>
                  <figure>
                    <img src={i.image} alt={i.title} />
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
