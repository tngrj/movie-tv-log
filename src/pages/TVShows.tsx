import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TVShow = {
  id: number;
  title: string;
  rating: number;
  watchDate: string;
  review?: string;
  genres: string[];
  platform: string;
  rewatch: boolean;
  status: "watched" | "watching" | "watchlist" | "stopped" | "coming soon" | "waiting";
  favourite: boolean;
  imageSrc: string;
};

const dummyTVShows: TVShow[] = [
  {
    id: 1,
    title: "Breaking Bad",
    rating: 5,
    watchDate: "2024-01-15",
    genres: ["Drama", "Crime", "Thriller"],
    platform: "Netflix",
    rewatch: true,
    status: "watched",
    favourite: true,
    imageSrc: "https://images.unsplash.com/photo-1562159278-1253a58da141?w=800&dpr=2&q=80",
  },
  {
    id: 2,
    title: "The Last of Us",
    rating: 4.5,
    watchDate: "2024-02-20",
    genres: ["Drama", "Action", "Horror"],
    platform: "HBO Max",
    rewatch: false,
    status: "watched",
    favourite: true,
    imageSrc: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&dpr=2&q=80",
  },
  {
    id: 3,
    title: "House of the Dragon",
    rating: 4,
    watchDate: "2024-03-01",
    genres: ["Fantasy", "Drama", "Action"],
    platform: "HBO Max",
    rewatch: false,
    status: "watching",
    favourite: false,
    imageSrc: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&dpr=2&q=80",
  },
];

const platforms = ["Netflix", "HBO Max", "Disney+", "Apple TV+", "Plex"];
const genres = ["Drama", "Comedy", "Action", "Horror", "Fantasy", "Crime", "Thriller"];
const statuses = ["watched", "watching", "watchlist", "stopped", "coming soon", "waiting"];

const TVShows = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const filteredShows = dummyTVShows.filter((show) => {
    const platformMatch = selectedPlatforms.length === 0 || selectedPlatforms.includes(show.platform);
    const genreMatch = selectedGenres.length === 0 || show.genres.some(g => selectedGenres.includes(g));
    const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(show.status);
    return platformMatch && genreMatch && statusMatch;
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar>
        <SidebarHeader className="border-b border-border/10 p-4">
          <h2 className="text-lg font-semibold">Filters</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platforms</SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2">
              {platforms.map((platform) => (
                <div key={platform} className="flex items-center space-x-2">
                  <Checkbox
                    id={`platform-${platform}`}
                    checked={selectedPlatforms.includes(platform)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPlatforms([...selectedPlatforms, platform]);
                      } else {
                        setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
                      }
                    }}
                  />
                  <label htmlFor={`platform-${platform}`} className="text-sm text-white">
                    {platform}
                  </label>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Genres</SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2">
              {genres.map((genre) => (
                <div key={genre} className="flex items-center space-x-2">
                  <Checkbox
                    id={`genre-${genre}`}
                    checked={selectedGenres.includes(genre)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedGenres([...selectedGenres, genre]);
                      } else {
                        setSelectedGenres(selectedGenres.filter((g) => g !== genre));
                      }
                    }}
                  />
                  <label htmlFor={`genre-${genre}`} className="text-sm text-white">
                    {genre}
                  </label>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Status</SidebarGroupLabel>
            <SidebarGroupContent className="space-y-2">
              {statuses.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={selectedStatuses.includes(status)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStatuses([...selectedStatuses, status]);
                      } else {
                        setSelectedStatuses(selectedStatuses.filter((s) => s !== status));
                      }
                    }}
                  />
                  <label htmlFor={`status-${status}`} className="text-sm text-white capitalize">
                    {status}
                  </label>
                </div>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShows.map((show) => (
            <Card key={show.id} className="bg-card text-card-foreground overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={show.imageSrc}
                  alt={show.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  {show.favourite && (
                    <span className="bg-primary/80 text-primary-foreground px-2 py-1 rounded-md text-sm">
                      ★ Favorite
                    </span>
                  )}
                  <span className={cn(
                    "px-2 py-1 rounded-md text-sm capitalize",
                    show.status === "watched" && "bg-green-500/80 text-white",
                    show.status === "watching" && "bg-blue-500/80 text-white",
                    show.status === "watchlist" && "bg-yellow-500/80 text-white",
                    show.status === "stopped" && "bg-red-500/80 text-white",
                    show.status === "coming soon" && "bg-purple-500/80 text-white",
                    show.status === "waiting" && "bg-gray-500/80 text-white"
                  )}>
                    {show.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{show.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={show.rating} />
                  <span className="text-sm text-gray-400">({show.rating})</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre}
                      className="bg-primary/20 text-primary-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{show.platform}</span>
                  <span>{show.watchDate}</span>
                </div>
                {show.rewatch && (
                  <div className="mt-2 text-sm text-primary">
                    ↺ Rewatched
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TVShows;