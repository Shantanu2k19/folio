interface PhotoGridProps {
  columns: string[][];
}

export const PhotoGrid = ({ columns }: PhotoGridProps) => (
  <div className="grid grid-cols-3 gap-3 md:gap-5 items-start w-full px-4 lg:px-8">
    {columns.map((col, colIdx) => {
      const columnStyle = colIdx === 1 ? 'lg:-translate-y-10' : colIdx === 2 ? 'lg:translate-y-12' : '';
      return (
        <div key={colIdx} className={`relative flex flex-col gap-4 md:gap-6 transition-all duration-1000 ease-in-out hover:z-30 ${columnStyle}`}>
          {col.map((url, imgIdx) => (
            <div key={imgIdx} className="relative z-10 transition-all duration-400 ease-[cubic-bezier(0.33,1,0.68,1)] hover:z-[100] hover:scale-[1.4] group">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200/10 bg-slate-800 shadow-2xl">
                <img src={url} alt="Gallery" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      );
    })}
  </div>
);

