import { Review } from "../../data/reviews";
import Stars from "../Stars";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type ReviewRowProps = {
  reviews: Review[];
};

function ReviewRow({ reviews }: ReviewRowProps) {
  return (
    <>
      {[...Array(2)].map(() => (
        <>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex md:w-[600px] w-[300px] sm:w-full  h-auto m-2 flex-col rounded-3xl p-12 ring-1 ring-neutral-950/5 dark:ring-neutral-300/5 transition hover:bg-neutral-50 dark:hover:bg-gray-800/30 relative"
            >
              <p className="description tracking-tight text-slate-900 dark:text-gray-300 before:content-['“'] after:content-['”']">
                {review.text}
              </p>

              <Stars stars={review.stars} />
              <p className="text-sm text-gray-500">{dayjs(review.date).fromNow()}</p>
            </div>
          ))}
        </>
      ))}
    </>
  );
}

export default ReviewRow;
