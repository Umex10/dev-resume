import { Badge } from "@/components/ui/badge"

export function StatusBadge() {
  return (
    <Badge variant="secondary" className="flex items-center gap-2 px-4 py-1.5 text-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      Available for work
    </Badge>
  )
}