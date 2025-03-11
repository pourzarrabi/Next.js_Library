import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => (
  <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link
      href={`/books/${id}`}
      className={cn(isLoanedBook && "w-full flex flex-col items-center")}
    >
      <BookCover coverColor={color} coverImage={cover} />
      <div className={cn("mt-4", !isLoanedBook && "xs:max-w-40 max-w-28")}>
        <p className='book-title'>{title}</p>
        <p className='book-genre'>{genre}</p>
      </div>

      {isLoanedBook && (
        <div className='mt-3 w-full'>
          <div className='book-loaned'>
            <div>
              <Image
                src='/icons/calendar.svg'
                alt='calendar'
                width={18}
                height={18}
                className='object-contain'
              />
            </div>

            <p className='text-lime-100'>11 روز تا تحویل</p>
          </div>

          <Button className='book-btn'>دانلود رسید</Button>
        </div>
      )}
    </Link>
  </li>
);
export default BookCard;
