import { Award, Users, FileText, Clock, Monitor, Target } from "lucide-react";

interface StatisticProps {
  icon: JSX.Element;
  label: string;
  value: string;
}

const statistics: StatisticProps[] = [
  {
    icon: <Users size={34} />,
    label: "Active Users",
    value: "800+",
  },
  {
    icon: <Award size={34} />,
    label: "Competitions Held",
    value: "120+",
  },
  {
    icon: <FileText size={34} />,
    label: "Tests Taken",
    value: "10,000+",
  },
  {
    icon: <Clock size={34} />,
    label: "Hours Practiced",
    value: "5,000+",
  },
  {
    icon: <Monitor size={34} />,
    label: "Typing Races",
    value: "1,200+",
  },
  {
    icon: <Target size={34} />,
    label: "Accuracy Achieved",
    value: "98%",
  },
];

export const Statistics = () => {
  return (
    <section id="statistics" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Platform Achievements
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {statistics.map(({ icon, label, value }: StatisticProps) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 text-muted-foreground/80"
          >
            <div className="flex items-center justify-center bg-muted/40 p-4 rounded-full">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
