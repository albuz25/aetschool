import { Briefcase, GraduationCap, LayoutGrid, LifeBuoy } from "lucide-react";
import { Container } from "@/components/shared/Container";

const VALUE_PROPS = [
  { icon: Briefcase, label: "Learn Job-Ready Skills" },
  { icon: GraduationCap, label: "Earn a Recognized Degree" },
  { icon: LayoutGrid, label: "Build Your Portfolio" },
  { icon: LifeBuoy, label: "Get Placement Support" },
];

export function ValuePropsStrip() {
  return (
    <section className="border-b border-border bg-navy/[0.03] py-5">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {VALUE_PROPS.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-center sm:justify-start">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                <item.icon className="size-4" />
              </span>
              <p className="text-sm font-semibold text-navy">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
