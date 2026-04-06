export default function AuraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 opacity-40 mix-blend-multiply">
        {/* Blob 1 - Blush */}
        <div className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-blush/60 blur-[100px] animate-blob" />
        
        {/* Blob 2 - Sage */}
        <div className="absolute top-[40%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-sage/50 blur-[120px] animate-blob animation-delay-4000" />
        
        {/* Blob 3 - Butter */}
        <div className="absolute bottom-[10%] left-[30%] w-[60vw] h-[40vw] rounded-full bg-butter/60 blur-[100px] animate-blob animation-delay-6000" />
        
        {/* Blob 4 - Diluted Brand Purple */}
        <div className="absolute -top-[10%] right-[20%] w-[40vw] h-[40vw] rounded-full bg-[#e8dff5]/60 blur-[90px] animate-blob animation-delay-2000" />
      </div>
    </div>
  );
}
