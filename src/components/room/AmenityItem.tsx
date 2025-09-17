interface AmenityItemProps {
  icon: string;
  label: string;
}

export default function AmenityItem({ icon, label }: AmenityItemProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-xl">{icon}</span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}