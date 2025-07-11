import CTA from '@/components/CTA/CTA';
import Hero from '@/components/Hero/Hero';
import NewLevel from '@/components/newLevel/NewLevel';
import Practice from '@/components/Practice/Practice';
import WhyLingo from '@/components/WhyLingo/WhyLingo';
import YouWillLearn from '@/components/YouWillLearn/YouWillLearn';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyLingo />
      <div className="background_grey">
        <YouWillLearn />
        <CTA
          title="Learn Fast. Drive Confident. Be Understood."
          text="Whether you're new to English or just want to improve, Lingo Driver helps you understand rules, fill out forms, give updates, and stay safe on the job"
        />
        <NewLevel />
        <Practice />
      </div>
    </>
  );
}
