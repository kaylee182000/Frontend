import { Skeleton } from "./ui/Skeleton";

const SkeletonLoading = () => {
  return (
    <ul className="flex flex-col col-span-2 space-y-6">
      <li>
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className=" px-6 py-4 flex flex-col gap-4">
            <Skeleton className="h-5 w-[280px]" />
            <Skeleton className="h-5 w-[200px]" />
            <Skeleton className="h-16 w-full" />
            <div className="flex gap-3">
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className=" px-6 py-4 flex flex-col gap-4">
            <Skeleton className="h-5 w-[280px]" />
            <Skeleton className="h-5 w-[200px]" />
            <Skeleton className="h-6 w-full" />
            <div className="flex gap-3">
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className=" px-6 py-4 flex flex-col gap-4">
            <Skeleton className="h-5 w-[280px]" />
            <Skeleton className="h-5 w-[200px]" />
            <Skeleton className="h-16 w-full" />
            <div className="flex gap-3">
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
              <Skeleton className="h-8 w-[80px] rounded-full" />
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SkeletonLoading;
