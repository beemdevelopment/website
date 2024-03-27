import { features } from "../data/features";

function Features() {
  return (
    <>
      <div className="pt-0 lg:pt-20">
        <div className="overflow-hidden mx-auto max-w-6xl flex-col align-center justify-center px-5 xl:px-0 pb-12 pt-12 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Meet Aegis Authenticator</h2>
            <p className="mt-4 text-lg text-gray-500">
              Aegis is an alternative to two factor authentication apps like Google Authenticator
              and Authy. Its most important features are security, backups and customization.
            </p>
          </div>
          <dl className="mt-12 px-1 space-y-6 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 sm:space-y-0 lg:grid-cols-3 lg:gap-x-6">
            {features.map((_, i) => (
              <div
                key={i}
                className="flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 dark:ring-neutral-300/5 transition hover:bg-neutral-50 dark:hover:bg-gray-800/30 sm:p-8 relative"
              >
                <dt>
                  <p className="text-lg font-medium leading-6">{features[i].title}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{features[i].text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

export default Features;
