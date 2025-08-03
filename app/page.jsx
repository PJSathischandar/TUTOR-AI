"use client";

import { useSession } from "next-auth/react";
import HomeComponent from "@components/HomeComponent";
import StudentComponent from "@components/StudentComponent";
import TutorComponent from "@components/TutorComponent";

const Home = () => {
  const { data: session, status } = useSession();

  // Show loading state while session is being loaded
  if (status === "loading") {
    return (
      <section className='w-full flex-center flex-col'>
        <div className="loader">Loading...</div>
      </section>
    );
  }

  // If user is not logged in, show default home component
  if (!session?.user) {
    return <HomeComponent />;
  }

  // If user is logged in, show component based on their role
  switch (session.user.role) {
    case 'student':
      return <StudentComponent />;
    case 'tutor':
      return <TutorComponent />;
    default:
      return <HomeComponent />;
  }
};

export default Home;
