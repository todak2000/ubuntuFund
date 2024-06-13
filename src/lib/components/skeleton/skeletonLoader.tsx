export const Skeleton = ({
    width,
    height,
    otherClass,
    radius,
  }: {
    width: number | string;
    height: number | string;
    otherClass?: string;
    radius: number | string;
  }) => {
    const baseClasses = 'block w-full h-full overflow-hidden relative';
    const skeletonClasses = `${baseClasses} ${otherClass} animate-pulse`;
  
    return (
      <div
        className={skeletonClasses}
        style={{ height: height, width: width, borderRadius: radius }}
      ></div>
    );
  };
  