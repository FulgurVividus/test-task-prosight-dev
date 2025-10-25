import sophiaAvatar from "../assets/imgs/sophia-williams.webp";
import liamAvatar from "../assets/imgs/liam-johnson.webp";
import emmaAvatar from "../assets/imgs/emma-brown.webp";

type mockDataType = {
  avatar: string;
  fullName: string;
  flag: number;
  star: number;
  taskTitle: string;
  description: string;
  location: string;
  calendar: string;
  days: number;
};

export const mockData: mockDataType[] = [
  {
    avatar: sophiaAvatar,
    fullName: "Sophia Williams",
    flag: 5,
    star: 5,
    taskTitle: "Drive me home from the airport",
    description: "Grocery Deliveries & so...",
    location: "Tallinn",
    calendar: "25.05 - 28.05, 2025",
    days: dateDifferenceInDays("2025-05-25", "2025-05-28"),
  },
  {
    avatar: liamAvatar,
    fullName: "Liam Johnson",
    flag: 3,
    star: 4,
    taskTitle: "Pick up groceries on Saturday",
    description: "Grocery Deliveries & so...",
    location: "Tallinn",
    calendar: "25.05 - 28.05, 2025",
    days: dateDifferenceInDays("2025-05-25", "2025-05-28"),
  },
  {
    avatar: emmaAvatar,
    fullName: "Emma Brown",
    flag: 2,
    star: 3,
    taskTitle: "Attend the conference next week",
    description: "Business project management",
    location: "Tallinn",
    calendar: "25.05 - 28.05, 2025",
    days: dateDifferenceInDays("2025-05-25", "2025-05-28"),
  },
];
