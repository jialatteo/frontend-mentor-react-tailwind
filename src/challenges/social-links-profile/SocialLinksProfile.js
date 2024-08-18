export default function SocialLinksProfile() {
  let buttonNames = [
    "Github",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  return (
    <div className="font-inter flex min-h-screen items-center justify-center bg-social-links-profile-grey-900 text-sm">
      <div className="m-4 flex w-96 flex-col items-center rounded-xl bg-social-links-profile-grey-800 p-4 text-white sm:p-10">
        <img
          className="mb-5 h-20 rounded-full"
          src="avatar-jessica.jpeg"
          alt="Avatar"
        />
        <h1 className="mb-1 text-2xl">Jessica Randall</h1>
        <h2 className="mb-6 text-xs font-semibold text-social-links-profile-green">
          London, United Kingdom
        </h2>
        <h3 className="text-sm">"Front-end developer and avid reader."</h3>
        <div className="mt-5 flex w-full flex-col items-center gap-4">
          {buttonNames.map((platform) => (
            <button
              key={platform}
              className="w-full rounded-lg bg-social-links-profile-grey-700 py-3 font-bold transition duration-300 ease-in-out hover:bg-social-links-profile-green hover:text-black"
            >
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
