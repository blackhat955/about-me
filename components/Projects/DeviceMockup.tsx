"use client";

interface DeviceMockupProps {
  type: "desktop" | "mobile" | "tablet";
  gradient: string;
  image?: string;
  children?: React.ReactNode;
}

export default function DeviceMockup({
  type,
  gradient,
  image,
  children,
}: DeviceMockupProps) {
  if (type === "mobile") {
    return (
      <div className="relative mx-auto w-[220px] md:w-[280px]">
        <div className="rounded-[2.5rem] border-[6px] border-apple-gray-600 bg-apple-gray-800 p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[22px] bg-apple-gray-600 rounded-b-2xl z-10" />
          <div
            className={`relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${gradient}`}
          >
            {children || (
              <div className="flex h-full items-center justify-center">
                <div className="space-y-3 p-6">
                  <div className="h-3 w-24 rounded-full bg-white/20" />
                  <div className="h-3 w-32 rounded-full bg-white/15" />
                  <div className="h-3 w-20 rounded-full bg-white/10" />
                  <div className="mt-6 h-24 w-full rounded-xl bg-white/10" />
                  <div className="h-16 w-full rounded-xl bg-white/8" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className="relative mx-auto w-full max-w-[500px]">
        <div className="rounded-[1.5rem] border-[5px] border-apple-gray-600 bg-apple-gray-800 p-2 shadow-2xl">
          <div
            className={`relative aspect-[4/3] w-full overflow-hidden rounded-[1.2rem] bg-gradient-to-br ${gradient}`}
          >
            {children || (
              <div className="flex h-full items-center justify-center p-8">
                <div className="w-full space-y-4">
                  <div className="h-4 w-1/3 rounded-full bg-white/20" />
                  <div className="h-4 w-2/3 rounded-full bg-white/15" />
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="h-32 rounded-xl bg-white/10" />
                    <div className="h-32 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Desktop
  return (
    <div className="relative mx-auto w-full max-w-[700px]">
      <div className="rounded-t-xl border-[3px] border-b-0 border-apple-gray-600 bg-apple-gray-800 p-1 pt-6 shadow-2xl">
        {/* Window controls */}
        <div className="absolute top-2 left-4 flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
          <div
            className={`relative aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br ${gradient}`}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className="w-full h-full object-cover" />
            ) : children || (
              <div className="flex h-full items-center justify-center p-10">
                <div className="w-full space-y-4">
                  <div className="flex gap-4">
                    <div className="h-4 w-16 rounded-full bg-white/20" />
                    <div className="h-4 w-20 rounded-full bg-white/15" />
                    <div className="h-4 w-12 rounded-full bg-white/10" />
                  </div>
                  <div className="h-5 w-2/3 rounded-full bg-white/20 mt-6" />
                  <div className="h-5 w-1/2 rounded-full bg-white/15" />
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-xl bg-white/10" />
                    <div className="h-24 rounded-xl bg-white/10" />
                    <div className="h-24 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            )}
          </div>
      </div>
      {/* Stand */}
      <div className="mx-auto h-4 w-full rounded-b-lg bg-apple-gray-600 shadow-lg" />
      <div className="mx-auto h-3 w-[60%] rounded-b-lg bg-apple-gray-700" />
    </div>
  );
}
