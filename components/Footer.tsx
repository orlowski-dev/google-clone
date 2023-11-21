import CountryLookup from "./CountryLookup";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="text-sm bg-gray-100 px-6 py-3 border-b-[1px] border-b-gray-200">
        <CountryLookup />
      </div>
      <div className="bg-gray-100 px-6 py-2 flex gap-3 justify-center md:justify-between flex-wrap">
        <div className="flex gap-3">
          <FooterLink location="/">About</FooterLink>
          <FooterLink location="/">Advertising</FooterLink>
          <FooterLink location="/">Business</FooterLink>
          <FooterLink location="/">How Search works</FooterLink>
        </div>
        <div className="flex gap-3">
          <FooterLink location="/">Privacy</FooterLink>
          <FooterLink location="/">Terms</FooterLink>
          <FooterLink location="/">Settings</FooterLink>
        </div>
      </div>
    </footer>
  );
}
