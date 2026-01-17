import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";

import { cn } from "@/lib/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type InfiniteCarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  autoplay?: boolean;
  autoplayDelay?: number;
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children: React.ReactNode;
};

type InfiniteCarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollNext: () => void;
} & InfiniteCarouselProps;

const InfiniteCarouselContext = React.createContext<InfiniteCarouselContextProps | null>(null);

function useInfiniteCarousel() {
  const context = React.useContext(InfiniteCarouselContext);

  if (!context) {
    throw new Error("useInfiniteCarousel must be used within a <InfiniteCarousel />");
  }

  return context;
}

const InfiniteCarousel = React.forwardRef<
  HTMLDivElement,
  InfiniteCarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      autoplay = true,
      autoplayDelay = 4000,
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: true, // Enable infinite loop
        align: "start",
      },
      plugins
    );

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    // Autoplay functionality
    React.useEffect(() => {
      if (!api || !autoplay) {
        return;
      }

      const interval = setInterval(() => {
        api.scrollNext();
      }, autoplayDelay);

      return () => clearInterval(interval);
    }, [api, autoplay, autoplayDelay]);

    return (
      <InfiniteCarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          scrollNext,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          autoplay,
          autoplayDelay,
          className,
          children,
        }}
      >
        <section
          ref={ref}
          className={cn("relative", className)}
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </section>
      </InfiniteCarouselContext.Provider>
    );
  }
);
InfiniteCarousel.displayName = "InfiniteCarousel";

const InfiniteCarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useInfiniteCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
InfiniteCarouselContent.displayName = "InfiniteCarouselContent";

const InfiniteCarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useInfiniteCarousel();

  // Check if className contains a custom basis value
  const hasCustomBasis = className?.includes('basis-[') || className?.includes('basis-') && !className?.includes('basis-full');

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0",
        !hasCustomBasis && "basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
InfiniteCarouselItem.displayName = "InfiniteCarouselItem";

export {
  type CarouselApi,
  InfiniteCarousel,
  InfiniteCarouselContent,
  InfiniteCarouselItem,
};
