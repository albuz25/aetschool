import { Briefcase } from "lucide-react";

export function CareerRoles({ roles }: { roles: string[] }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-navy">Career Opportunities</h2>
      <div className="mt-5 flex flex-wrap gap-2.5">
        {roles.map((role) => (
          <span
            key={role}
            className="flex items-center gap-1.5 rounded-full border border-blue/20 bg-blue/5 px-3.5 py-1.5 text-sm font-medium text-blue"
          >
            <Briefcase className="size-3.5" />
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}
