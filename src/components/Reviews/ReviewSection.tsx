import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { reviews } from "../../data/reviews";
import ReviewRow from "./ReviewRow";
dayjs.extend(relativeTime);

function ReviewSection() {
  const reviewList = [...reviews].sort(() => Math.random() - 0.5);
  const fraction = Math.ceil(reviewList.length / 2);

  reviewList.forEach((review) => {
    review.text = review.highlights.reduce((acc, phrase) => {
      return acc.replace(phrase, `<span class="bg-blue-200 dark:bg-blue-800">${phrase}</span>`);
    }, review.text);
  });

  const firstRow = reviewList.slice(0, fraction);
  const secondRow = reviewList.slice(fraction);
  //const secondRow = reviewList.slice(oneThird, 2 * oneThird);
  //const thirdRow = reviewList.slice(2 * oneThird);

  return (
    <div className=" ">
      <div className="overflow-hidden mx-auto max-w-6xl flex-col align-center justify-center px-5 xl:px-0 pb-12 pt-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">What our users have to say</h2>
          <p className="mt-4 text-lg text-gray-500">
            We compiled a list of reviews from our Google Play listing
          </p>
        </div>
        <div className="relative flex items-center mt-12">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-[200px] pointer-events-none z-20 bg-gradient-to-r from-white dark:from-gray-900"></div>
            <div className="animate-loop-50s flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
              <ReviewRow reviews={firstRow}></ReviewRow>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[200px] pointer-events-none z-20 bg-gradient-to-l from-white dark:from-gray-900"></div>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="relative flex max-w-[100vw] overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-[200px] pointer-events-none z-20 bg-gradient-to-r from-white dark:from-gray-900"></div>
            <div className="animate-loop-60s mt-4 flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
              <ReviewRow reviews={secondRow}></ReviewRow>
            </div>
            <div className="absolute top-0 bottom-0 right-0 w-[200px] pointer-events-none z-20 bg-gradient-to-l from-white dark:from-gray-900"></div>
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
