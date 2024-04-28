import { Fragment } from "react";
import { Review } from "../../data/reviews";
import Stars from "../Stars";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type ReviewRowProps = {
  rowId: String;
  reviews: Review[];
};

function ReviewRow({ rowId, reviews }: ReviewRowProps) {
  return (
    <>
      {[...Array(2)].map((_1, i, _2) => (
        <Fragment key={i}>
          {reviews.map((review, j) => (
            <div
              key={`review-${rowId}-${i}-${j}`}
              className="flex md:w-[600px] w-[80vw] sm:w-full  h-auto m-2 flex-col rounded-3xl p-12 ring-1 ring-neutral-950/5 dark:ring-neutral-300/5 transition hover:bg-neutral-50 dark:hover:bg-gray-800/30 relative"
            >
              <div
                className="description tracking-tight text-slate-900 dark:text-gray-300 before:content-['“'] after:content-['”']"
                dangerouslySetInnerHTML={{ __html: review.text }}
              ></div>
              <Stars stars={review.stars} />
              <p className="text-sm text-gray-500">{dayjs(review.date).fromNow()}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default ReviewRow;
