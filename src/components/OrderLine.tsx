import type { ClassNameProp } from '#src/types.ts';

export type OrderLineProps = { label: string; value: string } & ClassNameProp;

export function OrderLine(props: OrderLineProps) {
  return (
    <div className={`text-left mb-3 ${props.className}`}>
      <div className="font-bold mb-1">{props.label}</div>
      <div>{props.value}</div>
    </div>
  );
}
