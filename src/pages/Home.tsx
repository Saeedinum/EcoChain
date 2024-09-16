import image from "/src/assets/spacecode.jpeg";

const Home = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <img src={image} alt="home" className="max-h-screen" />
    </main>
  );
};

export default Home;
