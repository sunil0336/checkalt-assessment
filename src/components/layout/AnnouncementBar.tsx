
export default function AnnouncementBar() {
  return (
    <div className="h-8 border-b border-white/20 bg-[#1e3f77] text-white">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 text-xs sm:px-8 sm:text-sm">
        <p>
          checkAlt Service Marketplace
          <span className="mx-2">•</span>
          Secure, guided business services
        </p>

        <p className="hidden sm:block">
          Interactive design preview · Demonstration pricing
        </p>
      </div>
    </div>
  );
}