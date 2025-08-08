import Feed from "@components/Feed";

const HomeComponent = () => (
  <section className='w-full flex-center flex-col'>
    {/* Hero Section */}
    <div className='w-full flex-center flex-col mb-16'>
      <h1 className='head_text text-center'>
        Welcome to
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> TutorAI Platform</span>
      </h1>
      <p className='desc text-center max-w-2xl'>
        Your comprehensive AI-powered educational platform connecting students with expert tutors 
        through intelligent matching, seamless scheduling, and personalized learning experiences.
      </p>
    </div>

    {/* Services Grid */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full max-w-6xl'>
      
      {/* AI-Powered Scheduling */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>📅</span>
          </div>
          <h3 className='text-xl font-semibold'>Smart Scheduling</h3>
        </div>
        <p className='text-gray-600'>
          AI-powered scheduling system that automatically matches your availability with the best tutors, 
          optimizing for time zones, learning preferences, and subject expertise.
        </p>
      </div>

      {/* AI Chatbot */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>🤖</span>
          </div>
          <h3 className='text-xl font-semibold'>AI Learning Assistant</h3>
        </div>
        <p className='text-gray-600'>
          24/7 intelligent chatbot that provides instant homework help, explains concepts, 
          and guides you through problems with personalized explanations and step-by-step solutions.
        </p>
      </div>

      {/* Personalized Learning */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>🎯</span>
          </div>
          <h3 className='text-xl font-semibold'>Personalized Learning</h3>
        </div>
        <p className='text-gray-600'>
          Adaptive learning paths powered by AI that adjust to your learning style, pace, and goals. 
          Get customized study plans and progress tracking for optimal results.
        </p>
      </div>

      {/* Expert Tutors */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>👨‍🏫</span>
          </div>
          <h3 className='text-xl font-semibold'>Expert Tutors</h3>
        </div>
        <p className='text-gray-600'>
          Connect with verified, experienced tutors across all subjects. From math and science 
          to languages and test prep, find the perfect match for your learning needs.
        </p>
      </div>

      {/* Interactive Whiteboard */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>📝</span>
          </div>
          <h3 className='text-xl font-semibold'>Interactive Learning Tools</h3>
        </div>
        <p className='text-gray-600'>
          Advanced virtual classroom with interactive whiteboard, screen sharing, file collaboration, 
          and real-time problem-solving tools for engaging online sessions.
        </p>
      </div>

      {/* Progress Analytics */}
      <div className='service_card'>
        <div className='flex items-center mb-4'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4'>
            <span className='text-2xl'>📊</span>
          </div>
          <h3 className='text-xl font-semibold'>Progress Analytics</h3>
        </div>
        <p className='text-gray-600'>
          Comprehensive analytics and reporting system that tracks your learning progress, 
          identifies strengths and weaknesses, and provides actionable insights for improvement.
        </p>
      </div>
    </div>

    {/* CTA Section */}
    <div className='w-full flex-center flex-col mb-16 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl'>
      <h2 className='text-3xl font-bold text-center mb-4'>
        Ready to Transform Your Learning Experience?
      </h2>
      <p className='text-gray-600 text-center mb-6 max-w-2xl'>
        Join thousands of students and tutors who are already using TutorAI to achieve their educational goals. 
        Sign up today and experience the future of personalized learning.
      </p>
      <div className='flex gap-4 flex-wrap justify-center'>
        <button className='black_btn'>Get Started as Student</button>
        <button className='outline_btn'>Become a Tutor</button>
      </div>
    </div>

    {/* Recent Activity Feed */}
    <div className='w-full max-w-6xl'>
      <h2 className='text-2xl font-bold text-center mb-8'>Latest Reviews</h2>
      <Feed />
    </div>
  </section>
);

export default HomeComponent;

