import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center mt-20">
      <Image src="spinner.svg" alt="..." width={96} height={96}></Image>
    </div>
  );
};

export default Loading;
