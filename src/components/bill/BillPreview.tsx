import React, { useState, useEffect, useRef } from "react";
import { BillData } from "@/types/bill";
import { AmazonInvoice } from "./platforms/AmazonInvoice";
import { WalmartInvoice } from "./platforms/WalmartInvoice";
import { SupplementInvoice } from "./platforms/SupplementInvoice";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface BillPreviewProps {
  billData: BillData;
}

export const BillPreview = ({ billData }: BillPreviewProps) => {
  const [scale, setScale] = useState<number>(0.85);
  const [isManualZoom, setIsManualZoom] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [wrapperHeight, setWrapperHeight] = useState<string>("auto");

  const updateScaleToFit = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const availableWidth = containerWidth - 32; // 16px padding on left/right
      if (availableWidth < 800) {
        const calculatedScale = Math.max(availableWidth / 800, 0.35);
        setScale(calculatedScale);
      } else {
        setScale(0.85);
      }
    }
  };

  // Sync wrapper height to prevent excessive blank space below transform-scaled elements
  useEffect(() => {
    if (invoiceRef.current) {
      const invoiceHeight = invoiceRef.current.offsetHeight;
      setWrapperHeight(`${invoiceHeight * scale}px`);
    } else {
      setWrapperHeight("auto");
    }
  }, [scale, billData]);

  useEffect(() => {
    if (!isManualZoom) {
      updateScaleToFit();
      window.addEventListener("resize", updateScaleToFit);
      return () => window.removeEventListener("resize", updateScaleToFit);
    }
  }, [isManualZoom]);

  const renderPlatformInvoice = () => {
    switch (billData.platform) {
      case "amazon":
        return <AmazonInvoice data={billData} />;
      case "walmart":
        return <WalmartInvoice data={billData} />;
      case "supplement":
        return <SupplementInvoice data={billData} />;
      default:
        return <AmazonInvoice data={billData} />;
    }
  };

  const handleZoomIn = () => {
    setIsManualZoom(true);
    setScale(prev => Math.min(prev + 0.05, 1.2));
  };
  const handleZoomOut = () => {
    setIsManualZoom(true);
    setScale(prev => Math.max(prev - 0.05, 0.5));
  };
  const handleResetZoom = () => {
    setIsManualZoom(false); // return to auto-fitting
    setTimeout(updateScaleToFit, 0);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* ── Zoom Controls Panel ── */}
      <div 
        className="flex items-center gap-4 px-4 py-2 rounded-full mb-6 border border-[#1E293B] bg-[#0B0F14] text-slate-300 shadow-lg text-xs font-semibold"
        style={{ userSelect: "none" }}
      >
        <span className="text-[#94A3B8] mr-1">Preview Zoom:</span>
        <button
          type="button"
          onClick={handleZoomOut}
          className="p-1 hover:text-white hover:bg-slate-800 rounded transition-all"
          title="Zoom Out"
        >
          <ZoomOut size={14} />
        </button>
        <span className="w-10 text-center font-mono text-blue-400">
          {Math.round(scale * 100)}%
        </span>
        <button
          type="button"
          onClick={handleZoomIn}
          className="p-1 hover:text-white hover:bg-slate-800 rounded transition-all"
          title="Zoom In"
        >
          <ZoomIn size={14} />
        </button>
        <div className="w-px h-3.5 bg-[#1E293B]" />
        <button
          type="button"
          onClick={handleResetZoom}
          className="flex items-center gap-1 p-1 hover:text-white hover:bg-slate-800 rounded transition-all"
          title="Reset Zoom"
        >
          <RotateCcw size={12} />
          <span>Reset</span>
        </button>
      </div>

      {/* ── Outer viewport container that handles overflow/scrolling ── */}
      <div 
        ref={containerRef}
        className="w-full overflow-hidden flex justify-center py-6 bg-slate-950/20 border border-slate-900 rounded-2xl relative min-h-[350px]"
      >
        {/* Ambient background sheet shadows */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none" />

        {/* Height container to handle scaled space correctly in the flex flow */}
        <div 
          style={{ 
            height: wrapperHeight,
            width: "800px", 
            transition: "height 0.15s ease-out"
          }} 
          className="overflow-visible flex justify-center"
        >
          {/* ── Scaling wrapper to visually resize the invoice to fit edit panes ── */}
          <div 
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              width: "800px", // fixed printable sheet width (standard A4 layout)
              height: "fit-content",
              transition: "transform 0.15s ease-out"
            }}
            className="flex-shrink-0"
          >
            {/* ── CAPTURE TARGET ── */}
            <div 
              ref={invoiceRef}
              id="bill-invoice-capture" 
              className="w-[800px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-300"
              style={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0,0,0,0.05)"
              }}
            >
              {renderPlatformInvoice()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
