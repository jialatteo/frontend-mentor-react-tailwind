import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  weight: ["500", "700"],
});

export default function JobListings() {
  return (
    <div
      className={`flex items-center justify-center ${leagueSpartan.className}`}
    >
      <p>hi</p>
    </div>
  );
}
