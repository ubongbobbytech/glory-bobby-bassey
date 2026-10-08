import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { drivePreview } from "@/lib/portfolio-media";

export type PortfolioVideo = {
  title: string;
  image: string;
  description: string;
  videoLink: string;
  video?: string;
  results: string[];
};

export function PortfolioVideoDialog({ video, onClose }: { video: PortfolioVideo | null; onClose: () => void }) {
  return (
    <Dialog open={video !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-h-[90vh] overflow-y-auto p-4 sm:max-w-4xl sm:p-6">
        {video && <>
          <DialogHeader className="pr-6 text-left">
            <DialogTitle>{video.title}</DialogTitle>
            <DialogDescription>{video.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video overflow-hidden rounded-md bg-espresso">
            {video.video ? (
              <video src={video.video} poster={video.image} controls playsInline preload="metadata" className="h-full w-full object-contain" />
            ) : (
              <iframe src={drivePreview(video.videoLink)} title={`${video.title} video walkthrough`} allow="autoplay; fullscreen" allowFullScreen className="h-full w-full border-0" />
            )}
          </div>
          <Button asChild variant="link" className="justify-start whitespace-normal px-0">
            <a href={video.videoLink} target="_blank" rel="noopener noreferrer">{video.video ? "Open original video" : "Open in Google Drive"} <ArrowUpRight /></a>
          </Button>
        </>}
      </DialogContent>
    </Dialog>
  );
}