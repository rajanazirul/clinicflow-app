import { auth, currentUser } from "@clerk/nextjs";
import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-southeast-2.hygraph.com/v2/clrxasrxb125t01utiius1940/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getStoreLocations = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {
      userName: "` +
    formValue.userName +
    `", 
      email: "` +
    formValue.email +
    `", 
      pickUpDate: "` +
    formValue.pickUpDate +
    `", 
      pickUpTime: "` +
    formValue.pickUpTime +
    `", 
      dropOffDate: "` +
    formValue.dropOffDate +
    `", 
      dropOffTime: "` +
    formValue.dropOffTime +
    `", 
      contactNumber: "` +
    formValue.contactNumber +
    `", 
      carId: {connect: 
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
  }
  
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const getUser = async () => {
  const { userId } = auth();
  if (userId) {
    return await currentUser();
  }
  return null;
};
