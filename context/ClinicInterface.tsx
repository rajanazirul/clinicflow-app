export interface ClinicProps {
  address: {
    town: string;
    state: string;
    numbers: string;
    poscode: string;
    streets: string;
  };
  createdAt: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  id: string;
  name: string;
  publishedAt: string;
  telephone: string;
  updatedAt: string;
  image: Array<{ url: string }>;
}

export interface ClinicListProps {
  clinicList: Array<ClinicProps>;
}

// Sample data RESPONSE from Hygraph API
// const clinic = {
//   address: {
//     town: "Kota Kinabalu",
//     state: "Sabah",
//     numbers: "1-G-7",
//     poscode: "88000",
//     streets: "Lorong Api - Api 1, Api-api Centre",
//   },
//   createdAt: "2024-02-20T09:06:42.783523+00:00",
//   geo: {
//     latitude: 5.976553720234743,
//     longitude: 116.07102723617588,
//   },
//   id: "clsu55qt20lbn0c18sbnxm3g0",
//   name: "Family Care Clinic Api Api",
//   publishedAt: null,
//   telephone: "0128514847",
//   updatedAt: "2024-02-20T09:09:40.295106+00:00",
// };