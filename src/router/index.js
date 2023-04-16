import Booking from "../pages/Booking/Booking";
import HomePage from "../pages/HomePage/HomePage";
import MediaPage from "../pages/Product/MediaPage";
export const router = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/media",
    page: MediaPage,
    isShowHeader: true,
  },
  {
    path: "/booking",
    page: Booking,
    isShowHeader: true,
  },
  // {
  //     path: '*',
  //     page: NotFoundPage,
  //     isShowHeader: true
  // },
];
