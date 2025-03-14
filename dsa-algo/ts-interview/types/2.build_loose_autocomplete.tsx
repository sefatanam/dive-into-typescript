// type IconSize = 'sm' | 'xs' | string; <= that case we cant get autocomplete

type IconSize = looseAutocomplete<"sm" | "xs" | "ts">; // better version

type looseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProp {
  size: IconSize;
}

export const Icon = (prop: IconProp) => {
  return <></>;
};

const Component = () => {
  return (
    <>
      <Icon size="ts"></Icon>
    </>
  );
};
