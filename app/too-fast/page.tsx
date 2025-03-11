const Page = () => {
  return (
    <main className='root-container flex flex-col min-h-screen items-center justify-center'>
      <h1 className='text-3xl font-bold text-light-100'>
        لطفا خونسردی خود را حفظ نمایید!
      </h1>
      <p className='mt-3 max-w-xl text-center text-light-400'>
        تعداد درخواست های شما بیش از حد مجاز است.
      </p>
    </main>
  );
};

export default Page;
