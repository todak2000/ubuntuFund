import Image from 'next/image';
import Link from 'next/link';

const Page404 = () => {
  return (
    <>
      <div className="grid gap-2 p-12 text-center">
        <Image
          src="/assets/404 Error-amico.svg"
          width={320}
          height={320}
          alt="404 Illustration"
          loading="lazy"
        />
      </div>

      <div className="grid gap-6 text-center">
        <div className="grid gap-2">
          <h3>Oops! page not Found</h3>
          <p>It&apos;s Okay!</p>
        </div>

        <div>
          <Link href="/" className="hover:underline">
            Let&apos;s Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
