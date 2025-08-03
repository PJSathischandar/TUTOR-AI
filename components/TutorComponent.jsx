import Feed from "@components/Feed";

const TutorComponent = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Welcome Tutor!
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Create & Share Teaching Prompts</span>
    </h1>
    <p className='desc text-center'>
      Design educational content, create teaching prompts, and share knowledge
      with students through AI-powered tools and resources
    </p>

    <Feed />
  </section>
);

export default TutorComponent;
