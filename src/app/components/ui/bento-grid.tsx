"use client";

import { cn } from "../../../../utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "columns-1 md:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  date,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  date?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
}) => {
  return (
    <div 
        className={cn(
            "break-inside-avoid mb-8 group/bento",
            className
        )}
    >
        <div className="rounded-md hover:shadow-md hover:-translate-y-1 transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-black dark:border-white/[0.2] bg-white-two border border-french-gray flex flex-col">
            {header}
        </div>
        <div className="flex flex-col px-2">
            <div className="flex items-center">
                <div className="flex-1 font-satoshi font-bold text-night text-xl dark:text-neutral-200 mt-2">
                    {title}
                </div>
                <div className="font-satoshi font-bold text-paynes-gray text-md dark:text-neutral-200 mt-2">
                    {date}
                </div>
            </div>  
            <div className="font-satoshi font-bold text-paynes-gray text-xl dark:text-neutral-300">
                {description}
            </div>
        </div>
    </div>
  );
};
