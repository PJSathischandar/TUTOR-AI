"use client";

import { useSession } from "next-auth/react";

const StudentComponent = () => {
  const { data: session } = useSession();

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Welcome Student {session?.user?.username}!
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Learn with AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Access educational prompts, practice exercises, and learning materials
        tailored for students to enhance your knowledge and skills
      </p>

    </section>
  );
};

export default StudentComponent;
