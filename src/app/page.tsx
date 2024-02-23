import Image from "next/image";
import PageLayout from "./components/global/layout";
import TextAndImage from "./components/sections/TextAndImage";

export default function Home() {
  return (
    <PageLayout>
      <TextAndImage className="mt-48" textDirection="right" />
      <TextAndImage className=" mt-48 " textDirection="left" />
    </PageLayout>
  );
}
