import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-screen relative">
        <Head />
        <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white mb-[4rem]">
          <Main />
          <NextScript />
        </body>
        <footer className="py-3 flex justify-center text-sm w-full absolute bottom-0">
          <div className="max-w-[90vw]">
            built by{" "}
            <a
              className="text-gray-900 dark:text-white"
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
