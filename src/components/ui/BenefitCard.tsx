import Card from "./Card";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card variant="glassmorphism" className="text-center border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
        <span className="material-symbols-outlined text-4xl text-primary">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </Card>
  );
}