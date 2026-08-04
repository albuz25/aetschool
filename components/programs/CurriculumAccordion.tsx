import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { CurriculumModule } from "@/lib/types";

export function CurriculumAccordion({ modules }: { modules: CurriculumModule[] }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-navy">Curriculum</h2>
      <Accordion defaultValue={[modules[0]?.module]} className="mt-5 rounded-2xl border border-border bg-white px-5">
        {modules.map((mod) => (
          <AccordionItem key={mod.module} value={mod.module}>
            <AccordionTrigger className="text-sm font-semibold">{mod.module}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-1.5">
                {mod.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-orange" />
                    {topic}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
