import Feed from "@components/Feed";

const StudentComponent = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Welcome Student!
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Learn with AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Access educational prompts, practice exercises, and learning materials
      tailored for students to enhance your knowledge and skills
    </p>

    <Feed />
  </section>
);

export default StudentComponent;
