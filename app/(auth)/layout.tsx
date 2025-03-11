import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <main className='auth-container'>
      <section className='auth-form'>
        <div className='auth-box'>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <Image src='/icons/logo.svg' alt='logo' width={45} height={45} />

            <h1 className='text-xl text-white font-semibold'>مکتب</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className='auth-illustration'>
        <Image
          src='/images/auth-illustration.png'
          alt='auth illustration'
          width={1000}
          height={1000}
          className='size-full object-cover'
        />
      </section>
    </main>
  );
};

export default Layout;
