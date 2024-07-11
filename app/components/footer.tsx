import FancyDivider from "./fancyDivider";
import Link from "next/link";

export default function Footer() {
  return(
    <>
      <FancyDivider curve={false} sharp={true} />
      <div className="flex flex-row flex-wrap gap-x-8 justify-between w-10/12 mx-auto mb-10 *:space-y-4 text-sm *:pr-12">
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Pages</li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/join">Students</Link></li>
          <li><Link href="/sponsor">Sponsors</Link></li>
          <li><Link href="/parents">Parents</Link></li>
        </ul>
        <ul className="*:text-[#f1f7feb5]">
          <li className="!text-[#fcfdffef]">Socials</li>
          <li><a href="https://google.ca/" target="_blank">Instagram</a></li>
          <li><a href="https://google.ca/" target="_blank">Twitter</a></li>
          <li><a href="https://google.ca/" target="_blank">Facebook</a></li>
          <li><a href="https://google.ca/" target="_blank">Discord</a></li>
          {/* Ask media which socials we are active on */}
        </ul>
      </div>
    </>
  );
}