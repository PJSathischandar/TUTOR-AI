"use client";

import { useSession } from "next-auth/react";
import Feed from "@components/Feed";

const TutorComponent = () => {
  const { data: session } = useSession();

  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Welcome {session?.user?.username || 'Tutor'}!
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Create & Share Teaching Prompts</span>
      </h1>
      <p className='desc text-center'>
        Design educational content, create teaching prompts, and share knowledge
        with students through AI-powered tools and resources
      </p>
    </section>
  );
};

export default TutorComponent;
