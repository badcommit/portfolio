import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Logo from "@/data/logo.png";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import Home from "../pages";

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen w-full flex-col justify-between">
        <header className="absolute top-0 w-full px-20 ">
          <div className={"flex items-center justify-between  py-10"}>
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <img
                      src="/static/images/logo.png"
                      className="w-8 space-y-2"
                    />
                  </div>
                  {typeof siteMetadata.headerTitle === "string" ? (
                    <div className="hidden h-6 align-middle text-2xl font-semibold sm:block">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>

            <div className="flex items-center text-base leading-5 ">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              {/*<ThemeSwitch />*/}
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="mb-auto ">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
