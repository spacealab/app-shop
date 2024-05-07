import {Banner, Layout, Section} from "@/components";

export default function Home() {

  return (

    <>

    
      <Layout>
      <Section>
        <Banner title={"Don't miss amazing grocery deals"}
                subtitle={"Sign up for the daily newsletter"}
                image={"/assets/images/fresh-apples.png"}
                bgImage={"/assets/images/banner_bg.png"}/>
      </Section>
      </Layout>
    </>
  );
} 