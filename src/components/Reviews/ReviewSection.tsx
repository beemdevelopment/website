import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { reviews } from "../../data/reviews";
import ReviewRow from "./ReviewRow";
dayjs.extend(relativeTime);

function ReviewSection() {
  const reviewList = [...reviews].sort(() => Math.random() - 0.5);
  const fraction = Math.ceil(reviewList.length / 2);

  const firstRow = reviewList.slice(0, fraction);
  const secondRow = reviewList.slice(fraction);
  //const secondRow = reviewList.slice(oneThird, 2 * oneThird);
  //const thirdRow = reviewList.slice(2 * oneThird);

  return (
    <div className="bg-white">
      <div className="overflow-hidden bg-white dark:bg-gray-900 mx-auto max-w-6xl lg:pt-44 pt-40 pb-56 flex-col align-center justify-center py-8 px-5 xl:px-0">
        <div className="relative flex items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-[200px] pointer-events-none z-50 bg-gradient-to-r from-white dark:from-gray-900"></div>
            <div className="animate-loop-50s flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
              <ReviewRow reviews={firstRow}></ReviewRow>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[200px] pointer-events-none z-50 bg-gradient-to-l from-white dark:from-gray-900"></div>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-[200px] pointer-events-none z-50 bg-gradient-to-r from-white dark:from-gray-900"></div>
            <div className="animate-loop-60s mt-4 flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
              <ReviewRow reviews={secondRow}></ReviewRow>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[200px] pointer-events-none z-50 bg-gradient-to-l from-white dark:from-gray-900"></div>
          </div>
        </div>
        {/* <div className="relative flex w-screen items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="animate-loop-22s flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
              <ReviewRow reviews={thirdRow}></ReviewRow>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ReviewSection;
