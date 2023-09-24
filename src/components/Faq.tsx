import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What does your app offer that other 2FA apps do not?",
    answer:
      "Compared to other 2FA apps, we think Aegis stands out in terms of its simplicity and security. Most popular apps like Google Authenticator and FreeOTP don't bother with additional security measures. They allow access to your tokens right after opening the app. Aegis, on the other hand, encrypts all of your tokens at rest and requires a password or the touch of a finger to decrypt them. <br/><br/>Another important feature is the ability to export your tokens and import them into another device. Google Authenticator doesn't have this, which has not only annoyed users for years, but has also resulted in loss of access to lots of accounts.",
  },
  {
    question: "Can you implement feature x and y?",
    answer:
      "Maybe! We certainly welcome feature requests and we make sure to consider every one of them. However, as we work on this app in our spare time, we can't make any promises as to when or if it will make it into the app. We usually work on the features we would like to have ourselves, so if you'd like to see a feature sooner rather than later, the fastest way would be to contribute! We're happy to help you in the process. The code is available on <a href='https://github.com/beemdevelopment/aegis/' target='_blank'>GitHub</a>.",
  },
  {
    question: "I found a bug! Where can I report it?",
    answer:
      "Yikes! We track all issues and feature requests on <a href='https://github.com/beemdevelopment/Aegis/issues'>GitHub</a>. Please submit an issue there. If you prefer, you can also <a href='mailto:beemdevelopment+support@gmail.com'>send us an e-mail</a>.",
  },
  {
    question: "Can I support your work?",
    answer:
      "Yes! We take donations on <a href='https://www.buymeacoffee.com/beemdevelopment'>Buy Me A Coffee</a>, in case you'd like to send a few dollars our way. There's also an even better way you can help out, by contributing! All of the code is free and open source, so you can grab a copy of it from <a href='https://github.com/beemdevelopment/Aegis'>GitHub</a> and start hacking!",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-slate-200 dark:divide-gray-700">
          <h2 className="text-3xl text-center  font-bold tracking-tight  ">
            Frequently asked questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-slate-200 dark:divide-gray-700 ">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p
                        className="text-base text-gray-500"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
