import BookApointment from "../components/BookApointment";
import Header from "../components/header";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div>
      <Header />
      <Speciality />
      <TopDoctors />
      <BookApointment />
    </div>
  );
};

export default Home;
