import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Button } from './Button';

interface Project {
  id: number;
  title: string;
  description: string | string[];
  images: string[];
  keyFeatures?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const placeholderSrc = useMemo(
    () => `https://via.placeholder.com/400x250/6b7280/ffffff?text=${encodeURIComponent(project.title)}`,
    [project.title]
  );

  const images = project.images?.length ? project.images : [placeholderSrc];
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = useCallback(() => {
    if (images.length <= 1) return;
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3500);
  }, [images.length]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const navigate = useCallback((newIndex: number) => {
    setActiveIndex((newIndex + images.length) % images.length);
    // Reset the timer so auto-play restarts from this point
    startAutoPlay();
  }, [images.length, startAutoPlay]);

  const safeIndex = images.length ? activeIndex % images.length : 0;
  const activeSrc = images[safeIndex] ?? placeholderSrc;
  const hasMultiple = images.length > 1;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-gray-100 theme-dark:bg-gray-800 relative overflow-hidden group">
        <img
          src={activeSrc}
          alt={hasMultiple ? `${project.title} (${safeIndex + 1}/${images.length})` : project.title}
          className="w-full h-full object-contain transition-opacity duration-300"
          onError={(e) => {
            e.currentTarget.src = placeholderSrc;
          }}
        />

        {/* Prev / Next arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={() => navigate(safeIndex - 1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate(safeIndex + 1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/65 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === safeIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <div className="space-y-2 text-sm text-gray-500 theme-dark:text-gray-400">
          {(Array.isArray(project.description) ? project.description : [project.description]).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </CardHeader>
      
      <CardContent>
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 theme-dark:text-gray-400">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 theme-dark:bg-blue-900 text-blue-800 theme-dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button size="sm" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}