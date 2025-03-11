import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className='book-overview'>
      <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>
        <div className='book-info'>
          <p>
            نویسنده:{" "}
            <span className='font-semibold text-light-200'>{author}</span>
          </p>
          <p>
            ژانر: <span className='font-semibold text-light-200'>{genre}</span>
          </p>

          <div className='flex flex-row gap-1'>
            <div>
              <Image src='/icons/star.svg' alt='star' width={22} height={22} />
            </div>

            <p>{rating}</p>
          </div>
        </div>

        <div className='book-copies'>
          <p>
            شمار تیراژ: <span>{total_copies}</span>
          </p>
          <p>
            تعداد دسترس: <span>{available_copies}</span>
          </p>
        </div>
        <p className='book-description'>{description}</p>
        <Button className='book-overview_btn'>
          <Image src='/icons/book.svg' alt='book' width={20} height={20} />
          <p className='text-dark-100 text-base'>امانت کتاب</p>
        </Button>
      </div>

      <div className='relative flex flex-1 justify-center'>
        <div className='relative'>
          <BookCover
            variant='wide'
            className='z-10'
            coverColor={color}
            coverImage={cover}
          />

          <div className='absolute right-16 top-10 -rotate-12 opacity-40 max-sm:hidden'>
            <BookCover variant='wide' coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
