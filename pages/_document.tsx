import Document, { Head, Html, Main, NextScript } from "next/document";
import fromTwColor from "../utils/fromTwColor";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-screen relative">
        <Head>
          <style>
            :root{" "}
            {`{--color-light: ${fromTwColor().bgLight}; --color-dark: ${
              fromTwColor().bgDark
            }; --color-fg-light: ${fromTwColor().fgLight}; --color-fg-dark: ${
              fromTwColor().fgDark
            }`}
          </style>
        </Head>
        <body
          className={`bg-light dark:bg-dark text-fgLight dark:text-fgDark mb-[4rem]`}
        >
          <Main />
          <NextScript />
        </body>
        <footer className="py-3 flex justify-center text-sm w-full absolute bottom-0">
          <div className="max-w-[90vw]">
            built by{" "}
            <a
              className="text-fgLight dark:text-fgDark"
              href="https://github.com/albbus-stack"
            >
              albbus-stack
            </a>
          </div>
        </footer>
      </Html>
    );
  }
}

export default MyDocument;
