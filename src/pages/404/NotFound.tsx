import Lottie from "lottie-react";
import notFound from "./notFound.json";

export default function Notfound() {
  return (
    <main className="flex items-center justify-center">
      <Lottie animationData={notFound} className="w-[300px] md:w-[400px]" />
    </main>
  );
}
